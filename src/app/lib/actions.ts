'use server';
 
import { signIn } from '@/../auth';
import { AuthError } from 'next-auth';
 
// ...
 
// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ): Promise<string | undefined> {
//   try {
//     await signIn('credentials', {
//       redirect: false,
//       email: formData.get('email') as string | null,
//       password: formData.get('password') as string | null,
//     });

//     return undefined;
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
): Promise<string | undefined> {
  try {
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    if (!email || !password) {
      throw new Error('Email or Password is missing');
    }

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      return result.error;
    }

    return undefined;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
