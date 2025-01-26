import { UserButton,SignedIn, SignedOut, SignInButton} from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Home