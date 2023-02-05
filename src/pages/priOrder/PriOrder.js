import React from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Container from '../../components/ui/Container';
import { products } from '../../data/data';
import PreOrderBook from '../preOderBook/PreOrderBook';

const PriOrder = () => {
    return (
        <div>
            <Container>
            <div className='text-sm breadcrumbs py-4'>
				<ul>
					<Breadcrumb route='/' name='হোম' />
					<Breadcrumb route='/pri-order' name='প্রি-অর্ডার' />
				</ul>
			</div>
            <div className='mt-5'>
                <div className='shadow shadow-gray-400 border-gray-400 border p-3 mb-4'>
                    <h2 className='text-green-900 px-2 font-bold text-xl'>প্রি-অর্ডার</h2>
                </div>
            </div>
            
            
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 mb-5 mt-8'>
                    {products?.map(item => (
                        <PreOrderBook key={item.id} item={item} />
                    ))}

            </div>

            </Container>

         </div>
    );
};

export default PriOrder;