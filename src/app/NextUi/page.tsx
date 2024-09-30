/*Page main NextUi */
import {Button} from '@nextui-org/button';

import React from 'react';

export default function Page() {
  return (
   <>
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <p className="text-white text-2xl font-semibold">Implementación de NextUI</p>
      <div>
        <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" isDisabled>Click me please!!</Button>
      </div>
    </div>
   
   </>
  );
}



/* import React from 'react'

export default function page() {
  return (
    <div>
        <p className=''>implementacion de NextUi</p>
    </div>
  )
} */
