import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

interface FormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validateOnChange?: boolean;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  submitError: string | null;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validateOnChange = false,
  validate
}: FormOptions<T>) {
  const [formState, setFormState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isSubmitSuccessful: false,
    submitError: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      touched: { ...prev.touched, [name]: true }
    }));
  };

  // Validate form values when they change
  useEffect(() => {
    if (validate && validateOnChange) {
      const errors = validate(formState.values);
      setFormState(prev => ({ ...prev, errors }));
    }
  }, [formState.values, validate, validateOnChange]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate before submission if validation function exists
    let errors = {};
    if (validate) {
      errors = validate(formState.values);
      setFormState(prev => ({ 
        ...prev, 
        errors,
        touched: Object.keys(prev.values).reduce((acc, key) => {
          acc[key as keyof T] = true;
          return acc;
        }, {} as Partial<Record<keyof T, boolean>>)
      }));
      
      // Don't submit if there are errors
      if (Object.keys(errors).length > 0) {
        return;
      }
    }
    
    setFormState(prev => ({ 
      ...prev, 
      isSubmitting: true,
      submitError: null
    }));
    
    try {
      await onSubmit(formState.values);
      
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        isSubmitSuccessful: true,
        values: initialValues, // Reset form on success
      }));
      
      // Reset success status after 5 seconds
      const timer = setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitSuccessful: false }));
      }, 5000);
      
      return () => clearTimeout(timer);
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        submitError: error instanceof Error ? error.message : 'An unexpected error occurred'
      }));
    }
  };

  const resetForm = () => {
    setFormState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
      isSubmitSuccessful: false,
      submitError: null
    });
  };

  return {
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting: formState.isSubmitting,
    isSubmitSuccessful: formState.isSubmitSuccessful,
    submitError: formState.submitError,
    handleChange,
    handleSubmit,
    resetForm,
    setValues: (values: Partial<T>) => setFormState(prev => ({
      ...prev,
      values: { ...prev.values, ...values }
    }))
  };
}
