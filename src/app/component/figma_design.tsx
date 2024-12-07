import Link from "next/link"
const Figma_design =() =>{
    return (
      <div className="w-[1440px] h-[1132px] top-[-590px] left-[-720px] bg-[#252B42]">
        {/*Navbar*/}
        <div className=" nav W-[1322px] h-[91px] left-[59px]  flex items-center gap-5 justify-evenly space-x-4">
           
            <div className=" brandname w-[187px] h-[58px] top-[16px] left-[136px] flex justify-between items-center">
                <h3 className="w-[152px] h-[32px] top-[13px] font-bold text-2xl leading-8 tracking-widest text-white ml-8">BrandName</h3>
            </div>
            <div className="w-[815px] h-[58px] top-4 left-[364px] flex justify-between items-center">

                    <ul className="w-[275px] h-6 top-[17px] gap-[21px] flex justify-around items-center ">
                  
                        <li className="w-[43] h-6 "></li>
                        <Link href="#" className="text-sm font-bold leading-6 tracking-[0.2px]  text-white 
                        text-center ">Home</Link>
                        <li className="w-[59px] h-6 "></li>
                        <Link href="#" className="text-sm font-bold leading-6 tracking-[0.2px] text-white text-center">Pricing</Link>
                        <li className="w-[52px] h-6 "></li>
                        <Link href="#" className="text-sm font-bold leading-6 tracking-[0.2px] text-white text-center">Product</Link>
                        <li className="w-[58px] h-6 "></li>
                        <Link href="#" className="text-sm font-bold leading-6 tracking-[0.2px] text-white text-center">Contact</Link>
                    </ul>

            <div className="w-[189px] h-[52px] top-[3px] left-[626px] gap-[45px] flex justify-between items-center">
                    <div className="h-[22px] w-[41px] ">
                    <Link href="#" className="h-[22px] w-[41px] font-bold text-sm leading-[22px] tracking-[0.2px] text-right text-white">Login</Link>
                    </div>
                    <div className="w-[214px] h-[52px]">
                        <div className="w-[110px] h-[52px] rounded-[5px] px-[25px] py-[15px] gap-[15px] bg-[#23A6F0]">
                            <button className="w-[60px] h-[22px] font-bold text-sm leading-[22px] tracking-[0.2px] text-right text-white ">JOIN US</button>
                         </div>
                     </div>
                     </div>
                </div> 
            </div>
            
        {/*Hero section*/}    
            <div className="hero w-[1046px] h-[1028px] top-[104px] left-[197px] pt-[80px] pb-[80px] gap-[80px] flex justify-center flex-col ml-52 ">
            <div className="w-[701px] h-[496px] ">
                <div className="w-[699px] h-[496px] py-10 gap-10 ml-64">
                <h5 className="w-[77px] h-[24px] font-bold text-sm leading-[24px] tracking-[0.1px] text-[#23A6F0] text-center ml-60 pb-10 ">Welcome</h5>
                <h1 className="w-[542px] h-[160px] font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white items-center
                 text-center "> 
                Selling on the 
                internet like a pro
                </h1>
                <h4 className="w-[536px] h-[60px] font-normal text-xl leading-[30px] tracking-[0.2px] text-center text-white pt-5 mt-6">
                    We know how large objects will act, but things on a 
                small scale just do not act that way.</h4>
                
            
 
            <div className="cta w-[365px] h-[52px] gap-[10px] flex mt-16 ml-24">
               <div className=" w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] gap-[10px] bg-[#23A6F0]">
                <button className="1 w-[113px] h-[22px] font-bold text-sm leading-[22px] tracking-[0.2px] text-center text-white">Get Quote Now</button>
                 </div>
                 <div className="2 w-[162px] h-[52px] border-[#23A6F0] rounded-[5px] border-[1px] py-[15px] px-[40px] gap-[10px]">
                <p className="w-[82px] h-[22px] text-[#23A6F0] font-bold text-sm  leading-[22px] tracking-[0.2px] text-center ">
                Learn More
                </p>
                </div>
                </div>
            </div>
        </div>
          
           {/*Cards*/} 

        <div className="row2 w-[1046px] h-[292px] gap-[30px] flex">
            <div className="w-[328px] h-[292px]">
            <div className=" card1 w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] bg-[#FFFFFF]">
                <div className="w-[76px] h-[70px] rounded-[10px] py-[22px] px-[19px] ga-[10px] bg-[#FFDCD1] "></div>
                <h3 className="w-[135px] h-[24px] font-bold text-base leading-[24px] tracking-[0.1px] text-[#252B42] mt-3">training Courses</h3>
                <div className="w-[50px] h-[2px] bg-[#E74040] mt-3"></div>
                <p className="w-[222px] h-[60px] font-normal text-sm leading-[20px] tracking-[0.2px] text-[#737373] mt-3">The gradual accumulation of 
                     information about atomic and 
                     small-scale behaviour...</p>
            </div>
            </div>

             
             
             
            <div className="w-[328px] h-[292px]">

            <div className=" card2 w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] bg-[#FFFFFF]">
                <div className="w-[76px] h-[70px] rounded-[10px] py-[22px] px-[19px] ga-[10px] bg-[#B9EAA8]"></div>
                <h3 className="w-[168px] h-[24px] font-bold text-base leading-[24px] tracking-[0.1px] text-[#252B42] mt-3">2,769 online courses</h3>
                <div className="w-[50px] h-[2px] bg-[#E74040] mt-3"></div>
                <p className="w-[222px] h-[60px] font-normal text-sm leading-[20px] tracking-[0.2px] text-[#737373] mt-3">The gradual accumulation of 
                information about atomic and 
                 small-scale behaviour...</p>
            </div>
            </div>




            <div className="w-[328px] h-[292px]">

            <div className=" card3 w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] bg-[#23A6F0]">
                <div className="w-[76px] h-[70px] rounded-[10px] py-[22px] px-[19px] ga-[10px] bg-[#FFFFFF]"></div>
                <h3 className="w-[135px] h-[24px] font-bold text-base leading-[24px] tracking-[0.1px] text-[#FFFFFF] mt-3">training Courses</h3>
                <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-3"></div>
                <p className="w-[222px] h-[60px] font-normal text-sm leading-[20px] tracking-[0.2px] text-[#FFFFFF] mt-3">The gradual accumulation of 
                 information about atomic and 
                  small-scale behaviour...</p>
            </div>
            </div>
        </div>

    </div>




 </div>
    )
}
export default Figma_design





