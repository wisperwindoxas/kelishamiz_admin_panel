import React from 'react'
import CardView from '../cards_view/card_view'
import CardUsers from '../cards_view/card_users'
import CardsProudct from '../cards_view/card_product'
import CardProfit from '../cards_view/card_profit'



type Props = {}

const Home = (props: Props) => {
  return (
    <div className='h-screen '>
          <div className="p-4 flex justify-evenly">
                <CardView/>
                <CardUsers/>
                <CardsProudct/>
                <CardProfit/>
          </div>

       
    </div>
  )
}

export default Home