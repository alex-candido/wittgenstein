import {
  type NextAuthOptions
} from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions ={
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        try {
          console.log('Authorizing user with email:', credentials.email);
          // Replace this with your actual user authentication logic
          const user = { id: '1', name: 'John Doe', email: credentials.email };

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
};