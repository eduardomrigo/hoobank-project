import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import styles from "../style"


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="HooBank Logo" className="w-[266px] h-[72px] object-contain" />
       <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-3">
              {footerLink.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLink.links.map((link, index)=>(
               
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">
      2024 HooBank. Coded by <a target="_blank" className="text-gradient" href="https://eduardev.com">EDUARDEV</a>.
      </p>
    </div>
    <div className="flex gap-6 flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) =>(
        <img src={social.icon} key={social.id} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer`} />
      ))}
    </div>
  </section>
)

export default Footer