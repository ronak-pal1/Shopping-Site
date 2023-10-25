const HeroSectionCard = ({
  imgUrl,
  name,
}: {
  imgUrl: string;
  name: string;
}): JSX.Element => {
  return (
    <div className="relative hover:opacity-80">
      <div className="absolute left-1/2 top-2/3">
        <p className="font-extrabold text-3xl">{name}</p>
      </div>
      <img src={imgUrl} alt="cloths" className="w-80 h-96 object-cover m-0" />
    </div>
  );
};

const HeroSection = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-row">
        <HeroSectionCard
          imgUrl="https://cdn2.stylicy.com/global/image-1244-119811428-1-big-hr.jpg"
          name="Adidus"
        />
        <HeroSectionCard
          imgUrl="https://www.lee.in/media/catalog/product/cache/2ea3bc6731f73a2fa6df91a199d51ea2/l/m/lmsh000995_1.jpg"
          name="Shirts"
        />
        <HeroSectionCard
          imgUrl="https://5.imimg.com/data5/SELLER/Default/2022/9/QP/YM/DQ/11667563/724cf37b-a46f-4d42-a7e9-3bdf3b45510b1637745799693-slazenger-men-tracksuits-4531637745799109-6.jpg"
          name="Track suits"
        />
        <HeroSectionCard
          imgUrl="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20862950/2022/11/22/ccc21b39-42f2-4be1-9d82-78f50c199c2e1669120895724HMMenBeigeSweaters1.jpg"
          name="Jumpers"
        />
        <HeroSectionCard
          imgUrl="https://images.pexels.com/photos/14412949/pexels-photo-14412949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Blazer"
        />
      </div>
    </div>
  );
};

export default HeroSection;
