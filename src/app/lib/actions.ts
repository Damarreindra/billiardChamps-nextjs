import { z } from 'zod';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { app } from './firebaseConfig';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

interface LoginData {
  email: string;
  password: string;
}

export async function login(loginData: LoginData) {
  const { email, password } = LoginSchema.parse(loginData);
  const auth = getAuth(app)
  try {
    await signInWithEmailAndPassword(auth,email, password);
    // If login is successful, you can redirect or perform other actions
    console.log('Login successful');
  
  } catch (error:any) {
    console.error('Login error:', error.message);
    throw new Error('Login failed');
  }
}
