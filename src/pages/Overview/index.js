import React from "react";

import {
  Button,
  Img,
  Text,
  Line,
  Stack,
  List,
  Radio,
  CheckBox,
} from "components";

const OverviewPage = () => {
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
                <div className="bg-bluegray_300_61 flex flex-row items-center justify-start pr-[110px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                  <Line className="bg-indigo_50 h-[56px] w-[3px]" />
                  <Img
                    src="images/img_iconsidebar.svg"
                    className="h-[16px] ml-[29px] object-cover w-[16px]"
                    alt="iconsidebar"
                  />
                  <Text
                    className="font-normal ml-[24px] not-italic text-indigo_50 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Overview
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-center justify-start p-[18px] w-[100%]">
                  <Img
                    src="images/img_computer.svg"
                    className="h-[16px] object-cover w-[16px]"
                    alt="computer"
                  />
                  <Text
                    className="flex-grow font-normal not-italic text-bluegray_301 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1"
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
                    alt="computer One"
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
        <div className="bg-gray_50 flex flex-col items-center justify-start p-[30px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
          <header className="flex items-center justify-right w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center w-[100%]">
              <div className="header-row mt-[6px] mb-[10px]">
                <Text
                  className="text-bluegray_900 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1"
                  as="h2"
                  variant="h2"
                >
                  Overview
                </Text>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <Img
                src="images/img_search.svg"
                className="h-[16px] sm:hidden md:ml-[0] ml-[50rem] object-cover w-[16px]"
                alt="search"
              />
              <Img
                src="images/img_notification.svg"
                className="h-[16px] sm:hidden md:ml-[0] ml-[24px] right-0 object-cover w-[16px]"
                alt="notification"
              />
              
              <Text
                className=" mr-0 right-0 font-semibold sm:hidden md:ml-[0] ml-[32px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
          <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[54px] w-[100%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[24px] sm:px-[20px] w-[100%]"
              style={{ backgroundImage: "url('images/img_unresolved.svg')" }}
            >
              <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[50%]">
                <Text
                  className="text-bluegray_300 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Unresolved
                </Text>
                <Text
                  className="text-bluegray_900 text-left tracking-ls1 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  60
                </Text>
              </div>
            </div>
            <Stack className="h-[134px] relative w-[100%]">
              <div className="flex flex-col items-center justify-start m-[auto] w-[100%]">
                <div className="bg-white_A700 border border-indigo_A700 border-solid h-[134px] rounded-radius8 w-[100%]"></div>
              </div>
              <div className="absolute bottom-[12%] flex flex-col gap-[12px] justify-start right-[12%] w-[53%]">
                <Text
                  className="text-indigo_A700 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Overdue
                </Text>
                <div className="flex flex-row gap-[55px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[88%]">
                  <Text
                    className="flex-grow mb-[8px] text-indigo_A700 text-left tracking-ls1"
                    as="h1"
                    variant="h1"
                  >
                    16
                  </Text>
                  <Img
                    src="images/img_volume.svg"
                    className="h-[16px] mt-[42px] object-cover w-[16px]"
                    alt="volume"
                  />
                </div>
              </div>
            </Stack>
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[24px] sm:px-[20px] w-[100%]"
              style={{ backgroundImage: "url('images/img_unresolved.svg')" }}
            >
              <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[24%]">
                <Text
                  className="text-bluegray_300 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Open
                </Text>
                <Text
                  className="text-bluegray_900 text-left tracking-ls1 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  43
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[24px] sm:px-[20px] w-[100%]"
              style={{ backgroundImage: "url('images/img_unresolved.svg')" }}
            >
              <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[35%]">
                <Text
                  className="text-bluegray_300 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  On hold
                </Text>
                <Text
                  className="text-bluegray_900 text-left tracking-ls1 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  64
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-cover bg-no-repeat flex flex-col p-[2rem] items-center justify-start mt-[100px] sm:pl-[20px] pl-[32px] md:w-[100%] sm:w-[100%] w-[98%]"
            style={{ backgroundImage: "url('images/img_unresolved.svg')" }}>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[32px] sm:gap-[32px] items-center justify-between w-[100%]">
              <div className="flex flex-col gap-[54px] items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Today’s Orders
                  </Text>
                  <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="font-normal mt-[3px] not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      as of 25 Nov. 2019, 09:41 PM
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[25%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[35%]">
                        <Img
                          src="images/img_dividergraph.svg"
                          className="h-[1px] object-cover w-[auto]"
                          alt="dividergraph"
                        />
                        <Text
                          className="flex-grow font-semibold text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1"
                          as="h6"
                          variant="h6"
                        >
                          Today
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[48%]">
                        <Img
                          src="images/img_dividergraph_gray_300.svg"
                          className="h-[1px] object-cover w-[auto]"
                          alt="dividergraph One"
                        />
                        <Text
                          className="flex-grow font-semibold text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1"
                          as="h6"
                          variant="h6"
                        >
                          Yesterday
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                  <Stack className="h-[355px] relative w-[100%]">
                    <Stack
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[336px] inset-x-[0] justify-end mx-[auto] sm:pr-[20px] md:pr-[40px] pr-[51px] pt-[51px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group3.svg')",
                      }}
                    >
                      <Img
                        src="images/img_dividergraph_bluegray_50.svg"
                        className="h-[221px] ml-[auto] mr-[219px] mt-[auto] object-cover w-[auto]"
                        alt="dividergraph Two"
                      />
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[84%]">
                        <Stack
                          className="bg-cover bg-no-repeat h-[284px] pb-[57px] relative w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_graphicmask.png')",
                          }}
                        >
                          <Img
                            src="images/img_yesterdaygraph.svg"
                            className="h-[143px] mt-[47px] mx-[auto] object-cover w-[auto]"
                            alt="yesterdaygraph"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-end justify-start mx-[auto] top-[0] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group4.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[12px] items-center justify-start mb-[150px] mr-[127px] md:w-[100%] sm:w-[100%] w-[12%]">
                              <Stack className="h-[38px] relative w-[100%]">
                                <Img
                                  src="images/img_computer_white_a700.svg"
                                  className="h-[35px] m-[auto] object-cover w-[auto]"
                                  alt="computer Two"
                                />
                                <Text
                                  className="absolute font-semibold inset-x-[0] mx-[auto] text-bluegray_900 text-left top-[18%] tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                                  as="h5"
                                  variant="h5"
                                >
                                  38
                                </Text>
                              </Stack>
                              <div className="flex flex-col h-[24px] items-center justify-start outline outline-[2px] outline-indigo_A700_68 p-[5px] rounded-radius50 w-[24px]">
                                <div className="bg-white_A700 border-4 border-indigo_A700 border-solid h-[14px] rounded-radius50 shadow-bs w-[14px]"></div>
                              </div>
                            </div>
                          </div>
                        </Stack>
                      </div>
                    </Stack>
                    <div className="absolute flex flex-col gap-[43px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[2%]">
                      <Text
                        className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        60
                      </Text>
                      <Text
                        className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        50
                      </Text>
                      <Text
                        className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        40
                      </Text>
                      <Text
                        className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        30
                      </Text>
                      <Text
                        className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        20
                      </Text>
                      <Text
                        className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        10
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[6px] not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        0
                      </Text>
                    </div>
                  </Stack>
                  <div className="flex flex-row items-center justify-between pr-[4px] w-[100%]">
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      0
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      1
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      2
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      3
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      4
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      5
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      6
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      7
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      8
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      9
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      10
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      11
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      12
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      13
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      14
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      15
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      16
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      17
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      18
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      19
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      20
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      21
                    </Text>
                    <Text
                      className="not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      22
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[32%]">
                <div className="flex flex-row items-center justify-evenly w-[100%]">
                  
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[21%]">
                      <Text
                        className="font-semibold text-bluegray_300 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Resolved
                      </Text>
                      <Text
                        className="text-bluegray_900 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        449
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Three"
                      />
                      <Text
                        className="font-semibold mt-[27px] text-bluegray_300 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Received
                      </Text>
                      <Text
                        className="mt-[8px] text-bluegray_900 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        426
                      </Text>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Three"
                      />
                      <Text
                        className="font-semibold mt-[28px] text-bluegray_300 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Average first response time
                      </Text>
                      <Text
                        className="mt-[6px] text-bluegray_900 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        33m
                      </Text>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Three"
                      />
                      <Text
                        className="font-semibold mt-[29px] text-bluegray_300 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Average response time
                      </Text>
                      <Text
                        className="mt-[6px] text-bluegray_900 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        3h 8m
                      </Text>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Three"
                      />
                      <Text
                        className="font-semibold mt-[27px] text-bluegray_300 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Resolution within SLA
                      </Text>
                      <Text
                        className="mt-[8px] text-bluegray_900 text-left tracking-ls030000001192092896 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        94%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <List
            className="flex sm:flex-col sm:flex-none flex-row gap-[30px] justify-center mt-[30px] sm:self-stretch sm:w-[100%] w-[98%]"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-end py-[8px] w-[100%]"
              style={{ backgroundImage: "url('images/img_unresolved.svg')" }}
            >
              <div className="flex flex-col gap-[16px] items-center justify-start mt-[24px] w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Unresolved Orders
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[5px] w-[18%]">
                      <Text
                        className="font-semibold text-indigo_A700 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        View details
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    <span className="text-bluegray_300 text-[12px] font-mulish">
                      Group:{" "}
                    </span>
                    <span className="text-bluegray_700 text-[12px] font-mulish font-semibold leading-[normal]">
                      Support
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start pt-[23px] w-[100%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Waiting on Feature Request
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          4238
                        </Text>
                      </div>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Seven"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start pt-[23px] w-[100%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Awaiting Customer Response
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1005
                        </Text>
                      </div>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start pt-[23px] w-[100%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-semibold text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Awaiting Developer Fix
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          914
                        </Text>
                      </div>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between p-[18px] w-[100%]">
                    <Text
                      className="font-semibold mt-[6px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Pending
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_300 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      281
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-end py-[8px] w-[100%]"
              style={{ backgroundImage: "url('images/img_unresolved.svg')" }}
            >
              <div className="flex flex-col gap-[16px] items-center justify-start mt-[24px] w-[100%]">
                <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left tracking-ls04000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Tasks
                    </Text>
                    <div className="flex flex-col items-end justify-start mt-[5px] w-[18%]">
                      <Text
                        className="font-semibold text-indigo_A700 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        View all
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-left tracking-ls010000000149011612 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Today
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start pt-[17px] w-[100%]">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-end justify-between md:w-[100%] sm:w-[100%] w-[89%]">
                        <Text
                          className="font-semibold my-[4px] text-gray_400 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Create new task
                        </Text>
                        <Button
                          className="flex h-[24px] items-center justify-center w-[24px]"
                          shape="icbRoundedBorder8"
                          size="smIcn"
                          variant="icbFillGray100"
                        >
                          <Img
                            src="images/img_plus.svg"
                            className="h-[10px] w-[10px]"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Eight"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start pt-[17px] w-[100%]">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[89%]">
                        <Radio
                          value="FinishOrderupdate"
                          className="font-semibold mt-[2px] p-[0] text-[14px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          checked={false}
                          name="FinishOrderupdate"
                          label="Finish Order update"
                        ></Radio>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[16%] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                          shape="RoundedBorder8"
                          variant="FillAmberA400"
                        >
                          Urgent
                        </Button>
                      </div>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline One One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start pt-[17px] w-[100%]">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[89%]">
                        <Radio
                          value="CreatenewOrder"
                          className="font-semibold p-[0] text-[14px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          checked={false}
                          name="CreatenewOrder"
                          label="Create new Order "
                        ></Radio>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[12%] text-[11px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                          shape="RoundedBorder8"
                        >
                          New
                        </Button>
                      </div>
                      <Img
                        src="images/img_dividerline.svg"
                        className="h-[1px] object-cover w-[auto]"
                        alt="dividerline Two One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between p-[17px] w-[100%]">
                    <CheckBox
                      className="font-semibold p-[0] text-[14px] text-bluegray_900 text-left tracking-ls020000000298023224 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      inputClassName="h-[20px] mr-[5px] w-[20px]"
                      name="UpdateOrderreport"
                      label="Update Order report"
                    ></CheckBox>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[15%] text-[11px] text-bluegray_300 text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 uppercase w-[max-content]"
                      shape="RoundedBorder8"
                      variant="FillGray100"
                    >
                      Default
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
