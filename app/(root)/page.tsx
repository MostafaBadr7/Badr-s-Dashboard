import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { LassoSelect } from 'lucide-react'
import React from 'react'

export default function Home() {
  const loggedIn = { firstName: 'Mostafa', lastName: 'Badr', email: ' Mostafa.badr222@yahoo.com '}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          Welcome, Mostafa!
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.55}
          />
        </header>

      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance:'125.25' }, {currentBalance:'635.25'}]}/>
    </section>
  )
}
