import LogoImg from "../../Img/Logo.png";

export default function Logo({ calssImg, classDiv }) {
  return (
    <div className={`flex gap-1 text-[#3B3B3B] items-center ${classDiv}`}>
      <img src={LogoImg} className={calssImg} />
      E-Commerce
    </div>
  );
}
