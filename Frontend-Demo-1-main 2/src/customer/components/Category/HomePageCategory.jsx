
const callouts = [
    {
      name: 'Desk and Office',
      description: 'Men',
      imageSrc: 'https://cdn.pixabay.com/photo/2019/12/15/10/06/groom-4696727_1280.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/men',
    },
    {
      name: 'Self-Improvement',
      description: 'Home Decor',
      imageSrc: 'https://images.pexels.com/photos/4231475/pexels-photo-4231475.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/home-decor',
    },
    {
      name: 'Travel',
      description: 'Women',
      imageSrc: 'https://images.pexels.com/photos/8819457/pexels-photo-8819457.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/women',
    },
    {
        name: 'Desk and Office',
        description: 'Sale',
        imageSrc: 'https://images.pexels.com/photos/5650051/pexels-photo-5650051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '/sale',
      },
      {
        name: 'Self-Improvement',
        description: 'Kids',
        imageSrc: 'https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '/kids',
      },
      {
        name: 'Travel',
        description: 'Gadgets',
        imageSrc: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/gadgets',
      },
      {
        name: 'Toys',
        description: 'Toys',
        imageSrc: 'https://images.pexels.com/photos/16839530/pexels-photo-16839530/free-photo-of-teddy-toys-on-table.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '/toys',
      },
      {
        name: 'Beauty',
        description: 'Beauty',
        imageSrc: 'https://images.pexels.com/photos/286951/pexels-photo-286951.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/beauty',
      },
  ]
  
  export default function HomePageCategory() {
    return (
      <div className="bg-white">
        <h2 className="text-center font-bold text-xl text-gray-800 py-1" style={{ backgroundColor: '#5b2338', color: '#fff' }}>
          SHOP BY CATEGORIES
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-5 lg:max-w-none lg:py-10">
            <div className="mt-6 space-y-1 lg:grid lg:grid-cols-4 lg:gap-x-10 lg:space-y-0">
              {callouts.map((callout) => (
                <a key={callout.name} href={callout.href} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 border" style={{ borderColor: "#5b2338" }}>
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <p className="text-base font-semibold mb-10 text-center" style={{ color: '#5b2338' }}>
                    {callout.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  