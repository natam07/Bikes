import gixxerImg from '@/assets/Gixxer.png'
import hunkImg from '@/assets/hunk125r.png'
import R15Img from '@/assets/r15.jpg'
import CB190RImg from '@/assets/CBR190.png'
import vistroImg from '@/assets/Vistro.png'
import xpulseImg from '@/assets/xpulse2004v.png'
import xtzImg from '@/assets/xtz250.png'
import xrImg from '@/assets/xr15l.png'

/*Those are the datas of the products in an array.*/
export const productsdata = [
    {
        id: 1,
        name: 'GIXXER SF 250',  
        price: '16,830,000',
        Colors: [
            {
                id: 1,
                color: '#022bd7',
                active: true
            },
            {
                id: 2,
                color: '#000000',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#ff0004',
        image: gixxerImg,
        active: true
    },
    {
        id: 2,
        name: 'HUNK 125R',
        price: '7,490,000',
        Colors: [
            {
                id: 1,
                color: '#e32128',
                active: true
            },
            {
                id: 2,
                color: '#000000',
                active: false
            },
            {
                id: 3,
                color: '#022bd7',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#001aff',
        image: hunkImg,
        active: true
    },
    {
        id: 3,
        name: 'R15',
        price: '16,100,000',
        Colors: [
            {
                id: 1,
                color: '#000000',
                active: true
            },
            {
                id: 2,
                color: '#4a56bd',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#ff0004',
        image: R15Img,
        active: true
    },
    {
        id: 4,
        name: 'CBF190R',
        price: '12,690,000',
        Colors: [
            {
                id: 1,
                color: '#000000',
                active: true
            },
            {
                id: 2,
                color: '#e21e20',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#001aff',
        image: CB190RImg,
        active: true
    },
    {
        id: 5,
        name: 'V-Strom 250SX',
        price: '21,539,000',
        Colors: [
            {
                id: 1,
                color: '#ffde00',
                active: true
            },
            {
                id: 2,
                color: '#000000',
                active: false
            },
            {
                id: 3,
                color: '#973230',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#001aff',
        image: vistroImg,
        active: true
    },
    {
        id: 6,
        name: 'XPULSE 200 4V',
        price: '11,890,000',
        Colors: [
            {
                id: 1,
                color: '#000000',
                active: true
            },
            {
                id: 2,
                color: '#585856',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#ff0004',
        image: xpulseImg,
        active: true
    },
    {
        id: 7,
        name: 'XTZ 250',
        price: '25,900,000',
        Colors: [
            {
                id: 1,
                color: '#fc4537',
                active: true
            },
            {
                id: 2,
                color: '#f0f0f0',
                active: false
            },
            {
                id: 3,
                color: '#d4e83a',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#001aff',
        image: xtzImg,
        active: true
    },
    {
        id: 8,
        name: 'XR 150L 2.0',
        price: '10,850,000',
        Colors: [
            {
                id: 1,
                color: '#ffffff',
                active: true
            },
            {
                id: 2,
                color: '#000000',
                active: false
            },
            {
                id: 3,
                color: '#e21e20',
                active: false
            }
        ],
        color: '#ff7979',
        bgColor: '#ff0004',
        image: xrImg,
        active: true
    },
]