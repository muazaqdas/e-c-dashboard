import React from "react";

import { Img, Text } from "components";
import { Sidebar } from "components/Sidebar";

const CustomersDetailswithPrPage = () => {
  return (
    <>
      <div className="bg-gray_800 flex md:flex-col sm:flex-col flex-row font-mulish md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <Sidebar />
        <div className="bg-gray_50 flex flex-col items-center justify-start p-[30px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
              <div className="header-row mt-[6px] mb-[10px]">
                <Text
                  className="text-bluegray_900 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1"
                  as="h2"
                  variant="h2"
                >
                  Tickets
                </Text>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <Img
                src="images/img_search.svg"
                className="h-[16px] sm:hidden md:ml-[0] ml-[55rem] object-cover w-[16px]"
                alt="search"
              />
              <Img
                src="images/img_notification.svg"
                className="h-[16px] sm:hidden md:ml-[0] ml-[24px] object-cover w-[16px]"
                alt="notification"
              />

              <Text
                className="font-semibold sm:hidden md:ml-[0] ml-[32px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h5"
                variant="h5"
              >
                Jones Ferdinand
              </Text>
              <div className="flex flex-col h-[44px] sm:hidden items-center justify-start md:ml-[0] ml-[14px] outline outline-[1px] outline-gray_300 p-[2px] rounded-radius50 w-[44px]">
                <div className="flex flex-col h-[40px] items-center justify-start w-[40px]">
                  <Img
                    src="images/img_mheader.png"
                    className="h-[40px] sm:h-[auto] rounded-radius50 w-[40px]"
                    alt="mheader"
                  />
                </div>
              </div>
            </div>
          </header>
          <div
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start mt-[54px] w-[100%]"
            style={{ backgroundImage: "url('images/img_unresolved.svg')" }}
          >
            <div className="flex flex-col items-center justify-start mb-[37px] mt-[31px] w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[32px] sm:gap-[32px] items-end justify-between md:w-[100%] sm:w-[100%] w-[95%]">
                <div className="flex flex-row sm:gap-[40px] items-end justify-between md:w-[100%] sm:w-[100%] w-[92%]">
                  <Text
                    className="text-bluegray_900 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    All Orders
                  </Text>
                  <div className="flex flex-row gap-[8px] items-start justify-start mt-[6px] w-[6%]">
                    <Img
                      src="images/img_sort.svg"
                      className="h-[16px] object-cover w-[16px]"
                      alt="sort"
                    />
                    <Text
                      className="flex-grow font-semibold mt-[2px] text-bluegray_700 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Sort
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-start justify-start mb-[2px] mt-[6px] md:my-[0] sm:my-[0] md:w-[100%] sm:w-[100%] w-[6%]">
                  <Img
                    src="images/img_filter.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="filter"
                  />
                  <Text
                    className="flex-grow font-semibold text-bluegray_700 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h5"
                    variant="h5"
                  >
                    Filter
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[48px] w-[100%]">
                <div className="flex flex-col gap-[11px] justify-start w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[31px] md:w-[100%] sm:w-[100%] w-[85%]">
                    <Text
                      className="font-bold text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Customer Nmae
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[42px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Order ID
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[63px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Address
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[108px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Date
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[80px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Qty.
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[49px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Payment Meth.
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[49px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Mobile
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[79px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Email
                    </Text>
                  </div>
                  <Img
                    src="images/img_dividerline.svg"
                    className="h-[1px] object-cover w-[auto]"
                    alt="dividerline Two"
                  />
                </div>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[96%]">
                <Text
                  className="font-bold text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Alex Mortal
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[73px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  123CF45
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[61px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                  as="h5"
                  variant="h5"
                >
                  Lake town, 12/GH
                  <br />
                  Kolkata, 700018
                  <br />
                  Murshidabad
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[42px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  14/09/2022
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[42px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  01
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[54px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Online UPI
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[80px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  98876 67865
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[35px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  alex.info23@gmail.com
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 border border-gray_300 border-solid flex flex-col items-center justify-start mb-[480px] mt-[16px] rounded-radius8 w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[44px] mt-[22px] w-[100%]">
              <Text
                className="md:ml-[0] sm:ml-[0] ml-[25px] text-bluegray_900 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h3"
                variant="h3"
              >
                Product Details
              </Text>
              <div className="flex flex-col items-center justify-start mt-[12px] w-[100%]">
                <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[31px] md:w-[100%] sm:w-[100%] w-[86%]">
                    <Text
                      className="font-bold text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Product ID
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[59px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Name
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[76px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Order ID
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[89px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Product Image
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[66px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Batch No.
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[75px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Qty.
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[52px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Mfg. Date
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] sm:ml-[0] ml-[73px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Size
                    </Text>
                  </div>
                  <Img
                    src="images/img_dividerline.svg"
                    className="h-[1px] object-cover w-[auto]"
                    alt="dividerline Three"
                  />
                </div>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[28px] mt-[10px] md:w-[100%] sm:w-[100%] w-[86%]">
                <Text
                  className="font-bold text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  BVFGT343
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[62px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Nike Shoes
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[41px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  123CF45
                </Text>
                <Img
                  src="images/img_rectangle4400.png"
                  className="h-[60px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[99px] object-cover rounded-radius16 md:w-[100%] sm:w-[100%] w-[9%]"
                  alt="Rectangle4400"
                />
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[71px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  676-BNG
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[78px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  1
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[71px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  23-09-2019
                </Text>
                <Text
                  className="font-bold md:ml-[0] sm:ml-[0] ml-[59px] text-black_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  US 7
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersDetailswithPrPage;
