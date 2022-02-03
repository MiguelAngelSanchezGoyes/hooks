import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const{counter, increment} =useCounter(1);

    const {loading, data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data && data[0]
    


  return (
      <div>
          <h1>BreakingBad Quotes</h1>
          <hr/>

          {
              loading
              ?
                  (
                     <div className='alert alert-info text-center'>
                         Loading......
                     </div> 
                  )
               :
                  (
                      <>
                      <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                      </blockquote>

                      <blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
                      </>
                      
                      
                  )   
          }

          <button className='btn btn-primary' onClick={increment}>
              Next quote
          </button>

      </div>
  )
};
