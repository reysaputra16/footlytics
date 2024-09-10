const TipCard = () => (
  <div className={`flex flex-1 flex-col w-full border-borderColor border-l-2`}>
    <div
      className={`flex gap-3 xl:px-[80px] lg:px-[50px] px-[40px] xl:pt-[50px] pt-[30px] pb-[10px]`}
    >
      <p className="font-medium xxl:text-[36px] xl:text-[30px] lg:text-[22px] md:text-[17px] text-[13px] font-poppins">
        Tips
      </p>
    </div>
    <div className="flex flex-1 flex-col xl:px-[80px] lg:px-[50px] px-[40px] py-5 justify-center">
      <p className="font-bold font-poppins xxl:text-[30px] xl:text-[20px] lg:text-[14px] text-[12px]">
        Quis sodales consequat
      </p>
      <p className="xxl:text-[26px] xl:text-[17px] lg:text-[12px] text-[8px] font-poppins">
        Mollis vitae sem ipsum senectus vel. Eget velit neque volutpat at
        ultricies. Gravida semper vitae quam dolor duis potenti. Tortor et purus
        odio morbi suspendisse lobortis sociis. Dolor purus neque etiam
        porttitor sagittis. Semper dictumst amet in nisl consectetur amet id.
        Turpis tortor sagittis sagittis at volutpat risus.
      </p>
    </div>
  </div>
);

export default TipCard;
