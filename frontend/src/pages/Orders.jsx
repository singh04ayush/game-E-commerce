import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const pollingIntervalRef = useRef(null);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      setIsLoading(true);
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            item['orderId'] = order.orderId
            allOrdersItem.push(item);
          })
        })
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error('Error fetching order data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Initial load of order data
    loadOrderData();
    
    // Set up polling to check for status updates every 30 seconds
    if (token) {
      pollingIntervalRef.current = setInterval(() => {
        loadOrderData();
      }, 30000); // 30 seconds interval
    }
    
    // Cleanup interval on component unmount
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [token])

  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700'>
              {/* Completely restructured layout to avoid any overlapping */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {/* Left column: Game info and status */}
                <div className='flex items-start gap-3 sm:gap-6'>
                  <img src={item.image[0]} className='w-16 sm:w-20 object-cover' alt={item.name} />
                  <div className='flex-1'>
                    <div className='flex justify-between items-start'>
                      <p className='sm:text-base font-medium pr-2'>{item.name}</p>
                      {/* Status indicator - now shown on all screen sizes */}
                      <div className='flex items-center gap-2 ml-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm text-green-600 font-medium'>{item.status}</p>
                      </div>
                    </div>
                    
                    {/* Responsive pricing and details */}
                    <div className='flex flex-wrap items-center gap-2 sm:gap-3 mt-1 text-sm sm:text-base text-gray-700'>
                      <p className='font-medium'>{currency}{item.price}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>Platform: {item.platform}</p>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2 text-sm'>
                      <p>Date: <span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
                      <p>Payment: <span className='text-gray-500'>{item.paymentMethod}</span></p>
                    </div>
                  </div>
                </div>
                
                {/* Right column: Order details */}
                <div className='mt-3 lg:mt-0 border-t lg:border-t-0 pt-3 lg:pt-0'>
                  <div className='text-sm'>
                    <p className='font-medium'>Order ID: <span className='text-gray-600 break-all'>{item.orderId || 'N/A'}</span></p>
                    <div className='mt-2'>
                      <p className='font-medium'>Game Key:</p>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-2 mt-1'>
                        <code className='bg-gray-100 p-2 rounded text-xs break-all w-full sm:w-auto'>{item.gameKey || 'Processing...'}</code>
                        {item.gameKey && (
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(item.gameKey);
                              toast.success('Game key copied to clipboard!');
                            }} 
                            className='text-blue-600 hover:text-blue-800 text-xs sm:whitespace-nowrap'
                          >
                            Copy Key
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
