import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Login with Email',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'shekhar@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
        adminPassword: { label: 'adminpassword', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials
        // supplied
        console.log('hello be')
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log('loggedin')
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.log('login failed')
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider({
      clientId: 'flafja',
      clientSecret: 'fjajf',
    }),
    GitHubProvider({
      clientId: 'faijfka',
      clientSecret: 'jfajfklajklfja',
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
