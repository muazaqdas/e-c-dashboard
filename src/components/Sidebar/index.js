import { Button } from "components/Button";
import { Img } from "components/Img";
import { Text } from "components/Text";
import React,{useState} from "react";
import { Link } from "react-router-dom";

const sidebarOptions = [
  {
    title: "Overview",
    link: "/overview",
    image: "images/img_iconsidebar_bluegray_300.svg",
  },
  {
    title: "Orders",
    link: "/orders",
    image: "images/orders.svg",
  },
  {
    title: "Ideas",
    link: "/ideas",
    image: "images/img_lightbulb.svg",
  },
  {
    title: "Contacts",
    link: "/contacts",
    image: "images/img_user.svg",
  },
  {
    title: "Agents",
    link: "/agents",
    image: "images/img_airplane.svg",
  },
  {
    title: "Articles",
    link: "/articles",
    image: "images/img_computer_bluegray_300.svg",
  },
];
const sidebarMoreOptions = [
  {
    title: "Setting",
    link: "/settings",
    image: "images/img_settings.svg",
  },
  {
    title: "Subscription",
    link: "/subscription",
    image: "images/img_settings_bluegray_300.svg",
  },

];
export const Sidebar = () => {
    const [BtnActive,setBtn]=useState(-1);
    const [sideBtnActive,setActive]=useState(-1);
  return (
    <div className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[250px]">
      <div className="flex flex-col items-center justify-start mt-[37px] w-[100%]">
        <div className="flex flex-col gap-[59px] justify-start w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[32px] md:w-[100%] sm:w-[100%] w-[42%]">
            <Button
              className="flex h-[32px] items-center justify-center rounded-radius50 w-[34px]"
              size="smIcn"
              variant="icbFillIndigoA700"
            >
              <Img src="images/img_logo.png" className="" alt="logo" />
            </Button>
            <Text
              className="text-bluegray_300_99 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Erthoo
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            {sidebarOptions.map((item, i) => {
              return (
                <Link
                onMouseEnter={(e)=>{setActive(i)}}
                onMouseLeave={(e)=>{setActive(-1)}}
                onClick={(e)=>{setActive(i)}}
                style={{
                    backgroundColor:sideBtnActive===i?"rgb(62,64,73)":"rgb(54,55,64)",
                    borderLeft:sideBtnActive===i?"8px solid #DDE2FF":"",
                    zIndex:"2",
                    color:sideBtnActive===i?"rgba(225,225, 255, 1)":"grey"
                }}
                  to={item.link}
                  className="flex flex-row gap-[24px] items-center justify-start px-[24px] py-[18px] w-[100%]"
                >
                  <Img
                    src={item.image}
                    className="h-[16px] object-cover w-[16px]"
                    alt="iconsidebar"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                   {item.title}
                  </Text>
                </Link>
              );
            })}
            <Img
              src="images/img_dividerline.svg"
              className="h-[1px] mt-[16px] object-cover w-[auto]"
              alt="dividerline"
            />
            {sidebarMoreOptions.map((item, i) => {
              return (
                <Link
                onMouseEnter={(e)=>{setBtn(i)}}
                onMouseLeave={(e)=>{setBtn(-1)}}
                onClick={(e)=>{setBtn(i)}}
                style={{
                    backgroundColor:BtnActive===i?"rgb(62,64,73)":"rgb(54,55,64)",
                    borderLeft:BtnActive===i?"8px solid #DDE2FF":"",
                    zIndex:"2",
                    color:BtnActive===i?"rgba(225,225, 255, 1)":"grey"
                }}
                  to={item.link}
                  className="flex flex-row gap-[24px] items-center justify-start px-[24px] py-[18px] w-[100%]"
                >
                  <Img
                    src={item.image}
                    className="h-[16px] object-cover w-[16px]"
                    alt="iconsidebar"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                   {item.title}
                  </Text>
                </Link>
              );
            })}

            
            {/* <Link
              to="/settings"
              className="flex flex-row gap-[24px] items-center justify-start mt-[16px] p-[18px] w-[100%]"
            >
              <Img
                src="images/img_settings.svg"
                className="h-[16px] object-cover w-[16px]"
                alt="settings"
              />
              <Text
                className="flex-grow text-bluegray_300_99 font-normal not-italic text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                as="h4"
                variant="h4"
              >
                Settings
              </Text>
            </Link>
            <Link
              to="/subscription"
              className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]"
            >
              <Img
                src="images/img_settings_bluegray_300.svg"
                className="h-[16px] object-cover w-[16px]"
                alt="settings One"
              />
              <Text
                className="flex-grow text-bluegray_300_99 font-normal not-italic text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                as="h4"
                variant="h4"
              >
                Subscription
              </Text>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
