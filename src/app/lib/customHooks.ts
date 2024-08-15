import { useState } from 'react';

// Define the type for the action function
type ActionFunction<T, Args extends any[]> = (...args: Args) => Promise<T>;

// Define the custom hook
export function useActionState<T, Args extends any[]>(
  action: ActionFunction<T, Args>,
  initialState: T
): [T, (...args: Args) => Promise<void>, boolean] {
  const [state, setState] = useState<T>(initialState);
  const [isPending, setIsPending] = useState<boolean>(false);

  // Define the function to execute the action and update the state
  const executeAction = async (...args: Args) => {
    setIsPending(true);
    try {
      const result = await action(...args);
      setState(result);
    } catch (error) {
      console.error('Error executing action:', error);
      // Handle errors if needed, e.g., set error state
    } finally {
      setIsPending(false);
    }
  };

  // Return the current state, the execute function, and the isPending state
  return [state, executeAction, isPending];
};
