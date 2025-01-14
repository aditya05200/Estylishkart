import men1 from '../Navigation/navbar-images/men1.png';
import men2 from '../Navigation/navbar-images/men2.png';

export const navigation = {
    categories: [
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: men2,
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Ethnic Wear',
            href: '/',
            imageSrc: men2,
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'topwear',
            name: 'Topwear',
            items: [
              { name: 'T-shirts', id:"t-shirt-men", href: `{women/clothing/tops}` },
              { name: 'Casual Shirts', id:"casual-shirt-men", href: '#' },
              { name: 'Formal Shirts', id: 'formal-shirt-men' },
              { name: 'Blazzers & Coats', id: 'blazzers-coats-men' },
            ],
          },
          {
            id: 'bottom-wear',
            name: 'Bottomwear',
            items: [
              { name: 'Jeans', id: 'jeans-men' },
              { name: 'Casual Trousers', id: 'casual-trousers-men' },
              { name: 'Formal Trousers', id: 'formal-trousers-men' },
              { name: 'Shorts', id: 'shorts-men' },
            ],
          },
          {
            id: 'foot-wear',
            name: 'Footwear',
            items: [
              { name: 'Casual Shoes', id: 'casual-shoes-men' },
              { name: 'Sports Shoes', id: 'sports-shoes-men' },
              { name: 'Formal Shoes', id: 'formal-shoes-men' },
              { name: 'Sandals', id: 'sandals-men' },
              { name: 'Socks', id: 'socks-men' },
            ],
          },
          {
            id: 'sports-active-wear',
            name: 'Sports & Active Wear',
            items: [
              { name: 'Sports Shoes', id: 'sports-shoes' },
              { name: 'Active T-shirts', id: 'active-t-shirts-men' },
              { name: 'Track Pants & Shorts', id: 'track-pants-men' },
              { name: 'Tracksuits', id: 'tracksuits-men' },
              { name: 'Socks', id: 'socks-sports-men' },
            ],
          },
          {
            id: 'fashion-accessories',
            name: 'Fashion Accessories',
            items: [
              { name: 'Wallets', id: 'wallet-men' },
              { name: 'Belts', id: 'belts-men' },
              { name: 'Perfumes', id: 'perfumes-men' },
              { name: 'Deodrants', id: 'deodrants-men' },
              { name: 'Caps & Hats', id: 'caps-hats-men' },
            ],
          },
          {
            id: 'indian-festive-wear',
            name: 'Indian Festive Wear',
            items: [
              { name: 'Kurtas & Kurta Set', id: 'kurta-men' },
              { name: 'Nehru Jackets', id: 'nehru-jacket-men' },
            ],
          },
          {
            id: 'inner-wear',
            name: 'Inner Wear & Sleepwear',
            items: [
              { name: 'Briefs & Trunks', id: 'briefs-trunks-men' },
              { name: 'Boxers', id: 'boxers-men' },
              { name: 'Vests', id: 'vests-men' },
              { name: 'Sleepwear & Loungewear', id: 'sleepwear-loungewear-men' },
            ],
          },
          {
            id: 'miscllenaeus',
            name: 'Others',
            items: [
              { name: 'Personal Care & Grooming', id: 'personal-care-men' },
              { name: 'Sunglasses & Frames', id: 'sunglasses-frames-men' },
              { name: 'Watches', id: 'watches-men' },
            ],
          },
          {
            id: 'gadgets',
            name: 'Gadgets',
            items: [
              { name: 'Smart Wearables', id: 'smart-wearables-men' },
              { name: 'Headphones', id: 'headphones' },
              { name: 'Speakers', id: 'speakers' },
            ],
          },
        ],
      },
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://www.ethnicplus.in/media/catalog/product/cache/784df61d3b5737a7531cd598aa4c9972/z/c/zcl-7060-pista_2_.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Ethnic Wear',
            href: '/',
            imageSrc: 'https://www.ethnicplus.in/media/catalog/product/cache/6fff09796992fcb71d394bb15fea7b15/1/6/165_2__1.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'indian-fusion-wear',
            name: 'Indian & Fusion Wear',
            items: [
              { name: 'Kurtas & Suits', id:"kurtas-suits", href: `{women/clothing/tops}` },
              { name: 'Kurtis, Tunics & Tops', id:"kurtis-tunics-tops", href: '#' },
              { name: 'Sarees', id: 'sarees' },
              { name: 'Lengha Choli', id: 'lengha-choli' },
              { name: 'Leggings, Salwars & Chudidars', id: 'leggings-salwars-chudidars' },
              { name: 'Dress Materials', id: 'dress-materials' },
              { name: 'Lehenga Cholis and Gowns', id: 'lehenga-cholis-gowns' },
            ],
          },
          {
            id: 'Western-Wear',
            name: 'Western Wear',
            items: [
              { name: 'Dresses', id: 'dresses-women' },
              { name: 'Tops', id: 'tops' },
              { name: 'T-Shirts', id: 't-shirts-women' },
              { name: 'Jeans', id: 'jeans-women' },
              { name: 'Shorts & Skirts', id: 'shorts-skirts' },
            ],
          },
          {
            id: 'lingerie-sleepwear',
            name: 'Lingerie & Sleepwear',
            items: [
              { name: 'Bra', id: 'bra' },
              { name: 'Briefs', id: 'briefs-women' },
              { name: 'Shapewear', id: 'shapewear-women' },
              { name: 'Sleepwear & Loungewear', id: 'sleepwear-women' },
            ],
          },
          {
            id: 'footwear',
            name: 'Footwear',
            items: [
              { name: 'Flats', id: 'flats' },
              { name: 'Casual Shoes', id: 'casual-shoes-women' },
              { name: 'Heels', id: 'heels-women' },
              { name: 'Sports Shoes & Floaters', id: 'sports-shoes-women' },
            ],
          },
          {
            id: 'Beauty-Personal-Care',
            name: 'Beauty & Personal Care',
            items: [
              { name: 'Makeup', id: 'makeup' },
              { name: 'Skincare', id: 'skincare-women' },
              { name: 'Lipsticks', id: 'lipsticks' },
              { name: 'Fragrances', id: 'fragrances-women' },
            ],
          },
          {
            id: 'Jewellery',
            name: 'Jewellery',
            items: [
              { name: 'Fashion Jwellery', id: 'fashion-jwellery' },
              { name: 'Fine Jewellery', id: 'fine-jewellery' },
              { name: 'Earings', id: 'earings' },
            ],
          },
          {
            id: 'Gadgets',
            name: 'Gadgets',
            items: [
              { name: 'Smart Wearables', id: 'smart-wearables' },
              { name: 'Headphones', id: 'headphones' },
              { name: 'Speakers', id: 'speakers' },
            ],
          },
          {
            id: 'sports-active-wear',
            name: 'Sports & Active Wear',
            items: [
              { name: 'Clothing', id: 'clothing-women-sports' },
              { name: 'Footwear', id: 'footwear-women-sports' },
            ],
          },
          {
            id: 'others',
            name: 'Others',
            items: [
              { name: 'Maternity', id: 'maternity' },
              { name: 'Sunglasses & Frames', id: 'sunglasses-frames-women', href: `{women/clothing/tops}` },
              { name: 'Belts, Scarves & More', id: 'belts-scarves-women' },
              { name: 'Watches & Wearables', id: 'watches-wearables' },
            ],
          },
        ],
      },
      {
        id: 'kids',
        name: 'Kids',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://static.hopscotch.in/fstatic/product/202410/f3d7918c-b5d6-4c38-9fe8-14b1b5c485a0_full.jpg?version=1730264364361&tr=f-webp,w-480,c-at_max,dpr-2,n-medium',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Cotton T-shirts',
            id: '#',
            imageSrc: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/16439787a.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'Boys-Clothing',
            name: 'Boys Clothing',
            items: [
              { name: 'T-Shirts', id: 't-shirts-boys' },
              { name: 'Shirts', id: 'shirts-boys' },
              { name: 'Shorts', id: 'shorts-boys' },
              { name: 'Jeans', id: 'jeans-boys' },
              { name: 'Trousers', id: 'trousers-boys' },
              { name: 'Ethnic Wear', id: 'ethnic-wear-boys' },
              { name: 'Party Wear', id: 'party-wear-boys' },
              
            ],
          },
          {
            id: 'Girls-Clothing',
            name: 'Girls Clothing',
            items: [
              { name: 'Dresses', id: 'dresses-girls' },
              { name: 'Tops & T-Shirts', id: 'tops-t-shirts-girls' },
              { name: 'Clothing Sets', id: 'clothing-sets-girls' },
              { name: 'Lehenga Choli', id: 'lehenga-choli-girls' },
              { name: 'Kurta Sets', id: 'kurta-sets-girls' },
              { name: 'Party Wear', id: 'party-wear-girls' },
              { name: 'Jeans, Trousers & Capris', id: 'jeans-trousers-girls' },
              { name: 'Skirts & Shorts', id: 'skirts-shorts-girls' },
              { name: 'Tights & Leggings', id: 'tights-leggings-girls' },
            ],
          },
          {
            id: 'Footwear',
            name: 'Footwear',
            items: [
              { name: 'Casual Shoes', id: 'casual-shoes-kids' },
              { name: 'Sports Shoes', id: 'sports-shoes-kids' },
              { name: 'School Shoes', id: 'schoon-shoes' },
              { name: 'Flats', id: 'flats-kids' },
              { name: 'Sandals', id: 'sandals-kids' },
              { name: 'Socks', id: 'socks-kids' },
            ],
          },
          {
            id: 'infants',
            name: 'Infants',
            items: [
              { name: 'Bodysuits', id: 'bodysuits-kids' },
              { name: 'Rompers & Sleepsuits', id: 'rompers-kids' },
              { name: 'Clothing Sets', id: 'clothing-sets-kids' },
            ],
          },
          {
            id: 'Kids-Accessories',
            name: 'Kids Accessories',
            items: [
              { name: 'Bags & Backpack', id: 'bags-backpack-kids' },
              { name: 'Watches', id: 'watches-kids' },
              { name: 'Jewellery & Hair Accessory', id: 'jewellery-hair-kids' },
              { name: 'Sunglasses', id: 'sunglasses-kids' },
              { name: 'Caps & Hats', id: 'caps-hats-kids' },
            ],
          },
          {
            id: 'Toys-Games',
            name: 'Toys & Games',
            items: [
              { name: 'Learning & Development', id: 'learning-development-kids' },
              { name: 'Activity Toy', id: 'activity-toy-kids' },
              { name: 'Soft Toys', id: 'soft-toys' },
            ],
          },
        ],
      },
      {
        id: 'home_living',
        name: 'Home & Living',
        featured: [
          {
            name: 'Bed Sheets',
            id: '#',
            imageSrc: 'https://spaces.in/cdn/shop/products/1054412-1_1024x1024.jpg?v=1671612415',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Lamps',
            id: '#',
            imageSrc: 'https://ii1.pepperfry.com/media/catalog/product/c/l/1100x1210/classic-wooden-floor-lamp--with-cotton-shade--brown---off-white--classic-wooden-floor-lamp--with-cot-taysay.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'Bed-Linen-Furnishing',
            name: 'Bed Linen & Furnishing',
            items: [
              { name: 'Mattress Protectors', id: 'mattress-protectors' },
              { name: 'Bedding Sets', id: 'bedding-sets' },
              { name: 'Pillows & Pillow Covers', id: 'pillows-covers' },
              { name: 'Blankets, Quilts and Dohars', id: 'blankets-quilts-dohars' },
              { name: 'Diwan Sets', id: 'diwan-sets' },
              { name: 'Sofa Cover', id: 'sofa-cover' },
            ],
          },
          {
            id: 'bath',
            name: 'Bath',
            items: [
              { name: 'Bath Towels', id: 'bath-towels' },
              { name: 'Hand & Face Towels', id: 'hand-face-towels' },
              { name: 'Beach Towels', id: 'beach-towels' },
              { name: 'Towel Sets', id: 'towel-sets' },
            ],
          },
          {
            id: 'home-decor',
            name: 'Home Decor',
            items: [
              { name: 'Plant & Planters', id: 'plant-planters' },
              { name: 'Wall Décor', id: 'wall-decor' },
              { name: 'Clocks', id: 'clocks' },
              { name: 'Mirrors', id: 'mirrors' },
            ],
          },
          {
            id: 'Kitchen-Table',
            name: 'Kitchen & Table',
            items: [
              { name: 'Table Runners', id: 'table-runners' },
              { name: 'Cups and Mugs', id: 'cups-mugs' },
              { name: 'Kitchen Storage and Tools', id: 'kitchen-storage-tools' },
            ],
          },
          {
            id: 'storage',
            name: 'Storage',
            items: [
              { name: 'Bins', id: 'bins' },
              { name: 'Hangers, Hooks & Holder', id: 'hangers-hooks-holders' },
              { name: 'Organisers', id: 'organisers' },
            ],
          },
          {
            id: 'flooring',
            name: 'Flooring',
            items: [
              { name: 'Carpets', id: 'carpets' },
              { name: 'Floor Mats & Dhurries', id: 'floor-mats-dhurries' },
              { name: 'Door Mats', id: 'door-mats' },
            ],
          },
          {
            id: 'Lamps-Lighting',
            name: 'Lamps & Lighting',
            items: [
              { name: 'Floor Lamps', id: 'floor-lamps' },
              { name: 'Ceiling Lamps', id: 'ceiling-lamps' },
              { name: 'Wall Lamps', id: 'wall-lamps' },
              { name: 'Table Lamps', id: 'table-lamps' },
            ],
          },
        ],
      },
      {
        id: 'beauty',
        name: 'Beauty',
        featured: [
          {
            name: 'Best Sellers',
            id: '#',
            imageSrc: 'https://www.hokmakeup.com/cdn/shop/files/810149041785_2.jpg?v=1729771876',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Lipstics',
            id: '#',
            imageSrc: 'https://www.hokmakeup.com/cdn/shop/files/810149041785_4.jpg?v=1729771876',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'Makeup',
            name: 'Makeup',
            items: [
              { name: 'Lipstick', id: 'lipstick' },
              { name: 'Lip Gloss', id: 'lip-gloss' },
              { name: 'Lip Liner', id: 'lip-liner' },
              { name: 'Mascara', id: 'mascara' },
              { name: 'Eyeliner', id: 'eyeliner' },
              { name: 'Kajal', id: 'kajal' },
              { name: 'Eyeshadows', id: 'eyeshadows' },
              { name: 'Foundation', id: 'foundation' },
              { name: 'Primer', id: 'primer' },
              { name: 'Concealer', id: 'concealer' },
              { name: 'Compact', id: 'compact' },
              { name: 'Nail Polish', id: 'nail-polish' },
              
            ],
          },
          {
            id: 'Skincare-BathBody',
            name: 'Skincare, Bath & Body',
            items: [
              { name: 'Face Moisturiser', id: 'face-moisturiser' },
              { name: 'Sunscreen', id: 'sunscreen' },
              { name: 'Serum', id: 'serum' },
              { name: 'Face Wash', id: 'face-wash' },
              { name: 'Lip Balm', id: 'lip-balm' },
              { name: 'Body Lotion', id: 'body-lotion' },
              { name: 'Body Wash', id: 'body-wash' },
              { name: 'Body Scrub', id: 'body-scrub' },
              { name: 'Hand Cream', id: 'hand-cream' },
            ],
          },
          {
            id: 'Haircare',
            name: 'Haircare',
            items: [
              { name: 'Shampoo', id: 'shampoo' },
              { name: 'Conditioner', id: 'conditioner' },
              { name: 'Hair Cream', id: 'hair-cream' },
              { name: 'Hair Oil', id: 'hair-oil' },
              { name: 'Hair Accessory', id: 'hair-accessory' },
            ],
          },
          {
            id: 'Appliances',
            name: 'Appliances',
            items: [
              { name: 'Hair Dryer', id: 'hair-dryer' },
              { name: 'Hair Straightener', id: 'hair-straightener' },
            ],
          },
          {
            id: 'BeautyGift-MakeupSet',
            name: 'Beauty Gift & Makeup Set',
            items: [
              { name: 'Beauty Kit', id: 'beauty-kit' },
              { name: 'Makeup Kit', id: 'makeup-kit' },
            ],
          },
          {
            id: 'fragrances',
            name: 'Fragrances',
            items: [
              { name: 'Perfume', id: 'perfume' },
              { name: 'Deodorant', id: 'deodrant' },
              { name: 'Body Mist', id: 'body-mist' },
            ],
          },
          {
            id: 'mens-grooming',
            name: 'Mens Grooming',
            items: [
              { name: 'Trimmers', id: 'trimmers' },
              { name: 'Beard Colour and Oils', id: 'beard-colour-oils' },
            ],
          },
          {
            id: 'Wellness-Hygiene',
            name: 'Wellness & Hygiene',
            items: [
              // { name: 'Trimmers', id: '#' },
              // { name: 'Beard Colour and Oils', id: '#' },
            ],
          },
          {
            id: 'Baby-Care',
            name: 'Baby Care',
            items: [
              // { name: 'Trimmers', id: '#' },
              // { name: 'Beard Colour and Oils', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'accessories',
        name: 'Accessories',
        featured: [
          {
            name: 'Jwellery',
            id: '#',
            imageSrc: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw62541f46/homepage/ShopByCollection/sbc-string-it.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
          {
            name: 'Covers',
            id: '#',
            imageSrc: 'https://brownliving.in/cdn/shop/products/sunflowers-biodegradable-eco-friendly-phone-case-mobile-cover-snflwr-13-001-tech-accessories-brown-living-980329.jpg?v=1682968047',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
        ],
        sections: [
          {
            id: 'Men-Accessories',
            name: 'Men Accessories',
            items: [
              { name: 'Wallets', id: 'wallets-men' },
              { name: 'Belts', id: 'belts-men' },
              { name: 'Perfumes', id: 'perfumes-men' },
              { name: 'Deodorants', id: 'deodrants-men' },
              { name: 'Caps & Hats', id: 'caps-hats-men' },
            ],
          },
          {
            id: 'Women-Accessories',
            name: 'Women Accessories',
            items: [
              { name: 'Fashion Jewellery', id: 'fashion-jewellery' },
              { name: 'Fine Jewellery', id: 'fine-jewellery' },
              { name: 'Earings', id: 'earings' },
              { name: 'Belts, Scarves & More', id: 'belts-scarves-women' },
            ],
          },
          {
            id: 'Kids-Accessories',
            name: 'Kids Accessories',
            items: [
              { name: 'Bags & Backpack', id: 'bags-backpack' },
              { name: 'Watches', id: 'watches-kids' },
              { name: 'Jewellery & Hair Accessory', id: 'jewellery-hair-kids' },
              { name: 'Sunglasses', id: 'sunglasses-kids' },
              { name: 'Caps & Hats', id: 'caps-hats-kids' },
            ],
          },
          {
            id: 'Mobile-Accessories',
            name: 'Mobile Accessories',
            items: [
              { name: 'Cases & Covers', id: 'cases-covers' },
              { name: 'Screen Protector', id: 'screen-protector' },
              { name: 'Chargers & Data Cables', id: 'charges-data-cables' },
            ],
          },
          {
            id: 'Others-Accessories',
            name: 'Others Accessories',
            items: [
              { name: 'Lighting', id: 'lighting' },
              { name: 'Decor & More', id: 'decor' },
              { name: 'Bath & More', id: 'bath' },
            ],
          },
        ],
      },
      {
        id: 'sale',
        name: 'Sale',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/lifestyle/1000010501663-Blue-Teal-1000010501663-080822_01-2100.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Shirts',
            id: '#',
            imageSrc: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/lifestyle/1000012735504-Ecru-Beige-1000012735504_01-2100.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'men',
            name: 'Men',
            items: [
              // { name: 'T-Shirts', id: 'mens_kurta' },
            ],
          },
          {
            id: 'women',
            name: 'Women',
            items: [
              // { name: 'Dresses', id: '#' },
            ],
          },
          {
            id: 'kids',
            name: 'Kids',
            items: [
              // { name: 'Casual Shoes', id: '#' },
            ],
          },
          {
            id: 'infants',
            name: 'Infants',
            items: [
              // { name: 'Bodysuits', id: '#' },
            ],
          },
          {
            id: 'Mobile-Accessories',
            name: 'Mobile Accessories',
            items: [
              // { name: 'Bags & Backpack', id: '#' },
            ],
          },
          {
            id: 'others',
            name: 'Others',
            items: [
              // { name: 'Learning & Development', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      // { name: 'Company', id: '/' },
      // { name: 'Stores', id: '/' },
    ],
  }