import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Command, Search, Home, User, Briefcase, Code, Mail } from 'lucide-react';

interface KeyboardShortcutsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ShortcutGroup {
  title: string;
  shortcuts: {
    keys: string[];
    description: string;
    icon?: React.ReactNode;
  }[];
}

const shortcutGroups: ShortcutGroup[] = [
  {
    title: 'Search',
    shortcuts: [
      {
        keys: ['/'],
        description: 'Open search dialog',
        icon: <Search size={16} />
      },
      {
        keys: ['Esc'],
        description: 'Close search dialog'
      },
      {
        keys: ['↑', '↓'],
        description: 'Navigate search results'
      },
      {
        keys: ['Enter'],
        description: 'Select search result'
      }
    ]
  }
];

export default function KeyboardShortcutsDialog({ isOpen, onClose }: KeyboardShortcutsDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-300 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white flex items-center"
                  >
                    <Command size={20} className="mr-2" />
                    Keyboard Shortcuts
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-4 space-y-6">
                  {shortcutGroups.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        {group.title}
                      </h4>
                      <div className="space-y-2">
                        {group.shortcuts.map((shortcut, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
                          >
                            <div className="flex items-center">
                              {shortcut.icon && (
                                <span className="mr-2 text-gray-500 dark:text-gray-400">
                                  {shortcut.icon}
                                </span>
                              )}
                              <span className="text-gray-900 dark:text-white">
                                {shortcut.description}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {shortcut.keys.map((key, keyIndex) => (
                                <Fragment key={keyIndex}>
                                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
                                    {key}
                                  </kbd>
                                  {keyIndex < shortcut.keys.length - 1 && (
                                    <span className="text-gray-400">+</span>
                                  )}
                                </Fragment>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Press <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">?</kbd> anytime to show this dialog
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
