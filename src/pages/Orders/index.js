import React from "react";

import { Button, Img, Text, Line, List, Stack, SelectBox } from "components";

const OrdersPage = () => {
  return (
    <>
      <div className="bg-gray_800 flex md:flex-col sm:flex-col flex-row font-mulish md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[18%]">
          <div className="flex flex-col items-center justify-start mt-[37px] w-[100%]">
            <div className="flex flex-col gap-[59px] justify-start w-[100%]">
              <div className="flex flex-row gap-[12px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[32px] md:w-[100%] sm:w-[100%] w-[42%]">
                <Button
                  className="flex h-[32px] items-center justify-center rounded-radius50 w-[32px]"
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
                <div className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]">
                  <Img
                    src="images/img_iconsidebar_bluegray_300.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="iconsidebar"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                    Overview
                  </Text>
                </div>
                <div className="bg-bluegray_300_61 flex flex-row items-center justify-start pr-[137px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                  <Line className="bg-indigo_50 h-[56px] w-[3px]" />
                  <Img
                    src="images/img_television.svg"
                    className="h-[16px] ml-[29px] object-cover w-[16px]"
                    alt="television"
                  />
                  <Text
                    className="font-normal ml-[24px] not-italic text-indigo_50 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Oders
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]">
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="lightbulb"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                    Ideas
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="user"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                    Contacts
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]">
                  <Img
                    src="images/img_airplane.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="airplane"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                    Agents
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]">
                  <Img
                    src="images/img_computer_bluegray_300.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="computer"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                    Articles
                  </Text>
                </div>
                <Img
                  src="images/img_dividerline.svg"
                  className="h-[1px] mt-[16px] object-cover w-[auto]"
                  alt="dividerline"
                />
                <div className="flex flex-row gap-[24px] items-center justify-start mt-[16px] p-[18px] w-[100%]">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="settings"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                    Settings
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]">
                  <Img
                    src="images/img_settings_bluegray_300.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="settings One"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
                    as="h4"
                    variant="h4"
                  >
                    Subscription
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-gray_50 flex flex-col gap-[54px] items-center justify-start p-[30px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
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
                className="h-[16px] sm:hidden md:ml-[0] ml-[752px] object-cover w-[16px]"
                alt="search"
              />
              <Img
                src="images/img_notification.svg"
                className="h-[16px] sm:hidden md:ml-[0] ml-[24px] object-cover w-[16px]"
                alt="notification"
              />
              <Img
                src="images/img_dividerline.svg"
                className="h-[32px] sm:hidden md:ml-[0] ml-[32px] object-cover w-[auto]"
                alt="dividerline One"
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
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_unresolved.svg')" }}
          >
            <div className="flex flex-col gap-[48px] items-center justify-start mb-[23px] mt-[31px] w-[100%]">
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
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[31px] md:w-[100%] sm:w-[100%] w-[86%]">
                      <Text
                        className="font-bold text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Order details
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] sm:ml-[0] ml-[390px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Customer name
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] sm:ml-[0] ml-[140px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Date
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] sm:ml-[0] ml-[146px] text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Priority
                      </Text>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Two"
                    />
                  </div>
                </div>
                <List
                  className="flex flex-col sm:flex-none gap-[1px] items-center sm:self-stretch w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Three"
                    />
                    <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                        <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                          <Img
                            src="images/img_m5.png"
                            className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                            alt="m5"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Contact Email not Linked
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[244px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Tom Cruise
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[172px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              May 26, 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Updated 1 day ago
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[303px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              on 24.05.2019
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              6:30 PM
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[6%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                          variant="FillRed600"
                        >
                          High
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] sm:ml-[0] ml-[72px] md:mt-[0] sm:mt-[0] mt-[10px] object-cover w-[24px]"
                          alt="overflowmenu"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Four"
                    />
                    <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start w-[100%]">
                        <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                          <Img
                            src="images/img_w5.png"
                            className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                            alt="w5"
                          />
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start mb-[2px] md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[5px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Adding Images to Featured Posts
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[187px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Matt Damon
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[164px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              May 26, 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Updated 1 day ago
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[303px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              on 24.05.2019
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              8:00 AM
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[5%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                          variant="FillAmberA400"
                        >
                          low
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] sm:ml-[0] ml-[74px] md:mt-[0] sm:mt-[0] my-[10px] object-cover w-[24px]"
                          alt="overflowmenu One"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Five"
                    />
                    <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start w-[100%]">
                        <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                          <Img
                            src="images/img_w3.png"
                            className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                            alt="w3"
                          />
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start mb-[2px] md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[6px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              When will I be charged this month?
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[173px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Robert Downey
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[142px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              May 26, 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Updated 1 day ago
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[303px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              on 24.05.2019
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              7:30 PM
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[6%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                          variant="FillRed600"
                        >
                          High
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] sm:ml-[0] ml-[72px] md:mt-[0] sm:mt-[0] my-[10px] object-cover w-[24px]"
                          alt="overflowmenu Two"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Six"
                    />
                    <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                        <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                          <Img
                            src="images/img_m7.png"
                            className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                            alt="m7"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Payment not going through
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[227px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Christian Bale
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[153px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              May 25, 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Updated 2 days ago
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[297px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              on 24.05.2019
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              5:00 PM
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-bold leading-[normal] min-w-[8%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]">
                          Normal
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] sm:ml-[0] ml-[50px] md:mt-[0] sm:mt-[0] mt-[10px] object-cover w-[24px]"
                          alt="overflowmenu Three"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One Three"
                    />
                  </div>
                  <div className="bg-indigo_A700_5e flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Seven"
                    />
                    <Stack className="flex h-[44px] justify-end mt-[24px] relative md:w-[100%] sm:w-[100%] w-[95%]">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[16px] mb-[13px] ml-[384px] mt-[auto] object-cover w-[16px]"
                        alt="volume"
                      />
                      <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start w-[100%]">
                          <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                            <Img
                              src="images/img_m6.png"
                              className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                              alt="m6"
                            />
                          </div>
                          <div className="flex flex-col gap-[7px] items-start justify-start mb-[2px] md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[6px] md:w-[100%] sm:w-[100%] w-[71%]">
                            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Unable to add replies
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] sm:ml-[0] ml-[268px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Henry Cavil
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] sm:ml-[0] ml-[170px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                May 25, 2022
                              </Text>
                            </div>
                            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                              <Text
                                className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Updated 2 days ago
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] sm:ml-[0] ml-[297px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                on 24.05.2019
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                4:00 PM
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-bold leading-[normal] min-w-[6%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                            variant="FillRed600"
                          >
                            High
                          </Button>
                          <Img
                            src="images/img_overflowmenu.svg"
                            className="h-[24px] md:ml-[0] sm:ml-[0] ml-[72px] md:mt-[0] sm:mt-[0] my-[10px] object-cover w-[24px]"
                            alt="overflowmenu Four"
                          />
                        </div>
                      </div>
                    </Stack>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Eight"
                    />
                    <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                        <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                          <Img
                            src="images/img_m4.png"
                            className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                            alt="m4"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Downtime since last week
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[235px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Chris Evans
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[169px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              May 25, 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Updated 3 days ago
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[297px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              on 23.05.2019
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              2:00 PM
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-bold leading-[normal] min-w-[8%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]">
                          Normal
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] sm:ml-[0] ml-[50px] md:mt-[0] sm:mt-[0] mt-[10px] object-cover w-[24px]"
                          alt="overflowmenu Five"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Nine"
                    />
                    <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                        <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                          <Img
                            src="images/img_w6.png"
                            className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                            alt="w6"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[4px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Referral Bonus
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[312px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Sam Smith
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[174px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              May 25, 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                            <Text
                              className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Updated 4 day ago
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[303px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              on 22.05.2019
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              11:30 AM
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[5%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                          variant="FillAmberA400"
                        >
                          low
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] sm:ml-[0] ml-[74px] md:mt-[0] sm:mt-[0] mt-[10px] object-cover w-[24px]"
                          alt="overflowmenu Six"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One Six"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] object-cover w-[auto]"
                      alt="dividerline Ten"
                    />
                    <div className="flex flex-col items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[95%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start w-[100%]">
                        <div className="flex flex-col h-[44px] items-center justify-start w-[44px]">
                          <Img
                            src="images/img_w7.png"
                            className="h-[44px] sm:h-[auto] rounded-radius50 w-[44px]"
                            alt="w7"
                          />
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start mb-[2px] md:ml-[0] sm:ml-[0] ml-[24px] md:mt-[0] sm:mt-[0] mt-[6px] md:w-[100%] sm:w-[100%] w-[71%]">
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              How do I change my password?
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[196px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Steve Rogers
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] sm:ml-[0] ml-[159px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              May 24, 2022
                            </Text>
                          </div>
                          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Updated 6 days ago
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[297px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              on 21.05.2019
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] sm:ml-[0] ml-[166px] not-italic text-gray_400 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              1:00 PM
                            </Text>
                          </div>
                        </div>
                        <Button className="cursor-pointer font-bold leading-[normal] min-w-[8%] md:ml-[0] sm:ml-[0] ml-[88px] md:mt-[0] sm:mt-[0] my-[10px] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]">
                          Normal
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] md:ml-[0] sm:ml-[0] ml-[50px] md:mt-[0] sm:mt-[0] my-[10px] object-cover w-[24px]"
                          alt="overflowmenu Seven"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_dividerline.svg"
                      className="h-[1px] mt-[24px] object-cover w-[auto]"
                      alt="dividerline One Seven"
                    />
                  </div>
                </List>
                <div className="flex flex-row gap-[69px] items-center justify-end ml-[auto] mt-[24px] md:w-[100%] sm:w-[100%] w-[34%]">
                  <div className="flex flex-row items-center justify-between w-[38%]">
                    <Text
                      className="font-normal not-italic text-bluegray_300 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Rows per page:
                    </Text>
                    <SelectBox
                      className="font-normal sm:mx-[0] not-italic text-[14px] text-bluegray_700 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[17%]"
                      placeholderClassName="text-bluegray_700"
                      name="GroupTwentyOne"
                      placeholder="8"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_icon_dropdown.svg"
                          className="h-[12px] mr-[0] w-[12px]"
                          alt="icon / dropdown"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[44%]">
                    <Text
                      className="font-normal not-italic text-bluegray_300 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1-8 of 1240
                    </Text>
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[24px] object-cover w-[24px]"
                      alt="arrowleft"
                    />
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[24px] object-cover w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
