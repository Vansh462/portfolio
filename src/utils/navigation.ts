import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Custom hook for handling navigation with animations
 */
export const useAnimatedNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  /**
   * Navigate to a new route with animation support
   * @param to - The path to navigate to
   * @param options - Navigation options
   */
  const navigateTo = (to: string, options?: { 
    replace?: boolean;
    animationDelay?: number;
  }) => {
    const { replace = false, animationDelay = 0 } = options || {};
    
    // If we're already on this page, do nothing
    if (location.pathname === to) {
      return;
    }
    
    // If there's an animation delay, wait before navigating
    if (animationDelay > 0) {
      setTimeout(() => {
        navigate(to, { replace });
      }, animationDelay);
    } else {
      navigate(to, { replace });
    }
  };
  
  return {
    navigateTo,
    currentPath: location.pathname,
    isActive: (path: string) => 
      location.pathname === path || 
      (path !== '/' && location.pathname.startsWith(path))
  };
};
