import React from "react";
import { Modal } from "@redq/reuse-modal";
import styled from "styled-components";
import css from "@styled-system/css";
import { minWidth } from "styled-system";

export default function TrackingOrder() {
  return (
    <Modal>
      <ContentArea>
        <Title>Track My Order</Title>
        <Section>
          <Form>
            <Text>
              To track your order please enter your Order ID in the box below
              and press the "Track" button. This was given to you on your
              receipt and in the confirmation email you should have received.
            </Text>

            <RowFirst>
              <Label>Order ID</Label>
              <InputText placeholder="Found in your order confirmation email" />
            </RowFirst>

            <RowSecond>
              <Label>Billing email</Label>
              <InputText placeholder="Email your used during checkout" />
            </RowSecond>

            <RowLast>
              <TrackButton>Track</TrackButton>
            </RowLast>
          </Form>
        </Section>
      </ContentArea>

      <Footer>
        <FooterContent>
          
          {/* <HorizontalRule /> */}
        </FooterContent>
          <div style={{ textAlign: "center" }}>
            © 2021 Cabra Technologies Inc.
          </div>
      </Footer>
    </Modal>
  );
}

const ContentArea = styled.div<any>(
  css({
    overflow: "hidden",
    padding: ["68px 0 100px", "68px 0 50px", "110px 2rem 50px"],
    display: "grid",
    minHeight: "860px",
    // backgroundColor: "#000000",

    // @media(maxWidth:"640px"){

    // }
  })
);

const Title = styled.h1<any>(
  css({
    with: "auto",
    height: "50px",
    borderColor: "#17181a",
    color: "#17181a",
    fontFamily: "Poppins",
    fontSize: "30px",
    fontWeight: "500",
    marginTop: "-2px",
    marginLeft: "53px",

    display: "block",
  })
);

const Section = styled.section<any>(
  css({
    display: "block",
    with: "1200px",
    height: "700px",

    marginTop: "15px",
    marginLeft: "43px",
    marginRight: "44px",
    padding: "30px 10px 150px",
  })
);

const Form = styled.form<any>(
  css({
    display: "block",
    with: "1180px",
    height: "255px",

    backgroundColor: "#f5f5f5",
    border: "1px solid #e5e5e5",
    fontSize: "14px",
    margin: "0px 0px 265px",
    padding: "33px 100px 36px",
  })
);

const Text = styled.p<any>(
  css({
    borderColor: "#555555",
    color: "#555555",
    fontFamily: "Poppins",
    fontSize: "14px",
    gap: "normal",
    lineHeight: "26px",
    margin: "0px 0px 8px",
  })
);

const Label = styled.label<any>(
  css({
    width: "479px",
    height: "28px",

    display: "block",
    fontFamily: "Poppins",
    fontSize: "14px",
    gap: "normal",
    lineHeight: "28px",
  })
);

const InputText = styled.input<any>(
  css({
    width: "479px",
    height: "42px",
    backgroundColor: "#ffffff",
    border: "1px solid #dddddd",
    display: "inline-block",
    fontFamily: "Poppins",
    fontSize: "14px",
    gap: "normal",
    margin: "0px 0px 10px",
    padding: "0px 15px",
    outline: "none",
  })
);

const RowFirst = styled.p<any>(
  css({
    width: "479px",
    height: "80px",

    display: "inline-block",
    fontFamily: "Poppins",
    fontSize: "14px",
    gap: "normal",
    marginRight: "10px",
    padding: "0px",
  })
);

const RowSecond = styled.p<any>(
  css({
    width: "479px",
    height: "80px",
    display: "inline-block",
    fontFamily: "Poppins",
    fontSize: "14px",
    gap: "normal",
    marginLeft: "10px",
    padding: "0px",
  })
);

const RowLast = styled.p<any>(
  css({
    width: "978px",
    height: "44px",

    fontFamily: "Poppins",
    fontSize: "14px",
    gap: "normal",
    lineHeight: "26px",

    display: "flex",
    justifyContent: "flex-end",
  })
);

const TrackButton = styled.p<any>(
  css({
    width: "108px",
    height: "44px",

    alignItems: "flex-start",
    backgroundColor: "#86bc44",
    border: "1px solid #86bc44",
    color: "#ffffff",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "500",
    gap: "normal",
    lineHeight: "42px",
    padding: "0px 30px",
    textAlign: "center",
    textTransform: "uppercase",
  })
);

const Footer = styled.footer<any>(
  css({
    width: "100%",
    height: "525px",
    // backgroundColor: "#000000",
    backgroundColor: "#ffffff",

    fontFamily: "Poppins",
    fontSize: "14px",
    gap: "normal",
    padding: "72px 0px 88px",
  })
);

const FooterContent = styled.div<any>(
  css({
    width: "100%",
    height: "365px",

    gap: "normal",
    padding: "0px 40px",
  })
);

const Row = styled.div<any>(
  css({
    height: "228px",
    display: "block",
    marginBottom: "40px",
  })
);

const ColumnFirst = styled.div<any>(
  css({
    width: "635px",
    height: "228px",
    // backgroundColor: "black",
    backgroundColor: "#ffffff",

    alignItems: "flex-start",
    display: "flex",
    flexBasis: "0%",
    flexDirection: "column",
    gap: "normal",
    justifyContent: "space-between",
    float: "left",
  })
);

const Logo = styled.div<any>(
  css({
    height: "40px",
    // backgroundColor: "black",
    // backgroundColor: "#019376",

    display: "flex",
    alignItem: "center",
    // color: "white",
  })
);

const LogoImage = styled.img<any>(
  css({
    borderRadius: "50%",
  })
);

const LogoContent = styled.p<any>(
  css({
    fontFamily: "Poppins",
    fontSize: "16px",
    // fontWeight: "bold",
    padding: "9px",
    // color: "white",
  })
);

const Dowload = styled.div<any>(
  css({
    width: "285px",
    height: "44px",

    marginTop: "144px",
  })
);

const AppStore = styled.img<any>(
  css({
    width: "135px",
    height: "40px",

    float: "left",
  })
);

const GooglePlay = styled.img<any>(
  css({
    width: "135px",
    height: "40px",

    marginLeft: "15px",
    float: "left",
  })
);

const ColumnSecond = styled.div<any>(
  css({
    width: "317px",
    height: "228px",
    // backgroundColor: "black",
    backgroundColor: "#019376",

    display: "flex",
    flexBasis: "0%",
    flexDirection: "column",
    gap: "normal",
    float: "left",
  })
);

const ColumnLast = styled.div<any>(
  css({
    width: "317px",
    height: "228px",
    // backgroundColor: "black",
    backgroundColor: "#019376",

    display: "flex",
    flexBasis: "0%",
    flexDirection: "column",
    gap: "normal",
    float: "left",
  })
);

const AboutUs = styled.a<any>(
  css({
    height: "20px",
    // backgroundColor: "black",

    color: "#ffffff",
    gap: "normal",
    lineHeight: "20px",
    margin: "0px 0px 24px",
  })
);

const ReadBlog = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const GiftCard = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const Account = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const AddRestaurant = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const SignUp = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const GetHelp = styled.a<any>(
  css({
    height: "20px",
    // backgroundColor: "black",

    color: "#ffffff",
    gap: "normal",
    lineHeight: "20px",
    margin: "0px 0px 24px",
  })
);

const ViewCites = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const ViewCountries = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const RestaurantNearMe = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const Save = styled.a<any>(
  css({
    height: "24px",
    // backgroundColor: "black",

    color: "#ffffff",
    margin: "0px 0px 16px",
    textAlign: "left",
  })
);

const HorizontalRule = styled.hr<any>(
  css({
    width: "1269px",
    height: "1px",
    backgroundColor: "#f6f6f6",

    color: "#ffffff",
    margin: "40px 0",
    clear: "both",
  })
);

const GroupIcon = styled.div<any>(
  css({
    width: "96px",
    height: "36px",
    // backgroundColor: "black",
    // backgroundColor: "#019376",

    color: "#ffffff",
    display: "flex",
    float: "left",
  })
);

const EmptyArea = styled.div<any>(
  css({
    width: "920px",
    height: "36px",
    // backgroundColor: "black",

    float: "left",
    flexBasis: "36px",
  })
);

const GroupRule = styled.div<any>(
  css({
    width: "253px",
    height: "36px",
    // backgroundColor: "black",

    float: "left",
    display: "flex",
  })
);

const Facebook = styled.a<any>(
  css({
    width: "16px",
    height: "16px",

    color: "white",
    marginRight: "15px",
  })
);

const Twitter = styled.a<any>(
  css({
    width: "16px",
    height: "16px",

    color: "white",
    marginRight: "15px",
  })
);

const Instagram = styled.a<any>(
  css({
    width: "16px",
    height: "16px",

    color: "white",
    marginRight: "15px",
  })
);

const Policy = styled.a<any>(
  css({
    color: "#ffffff",
    display: "flex",
    fontSize: "14px",
    gap: "normal",
    lineHeight: "20px",
    marginRight: "40px",
  })
);

const Terms = styled.a<any>(
  css({
    color: "#ffffff",
    display: "flex",

    fontSize: "14px",
    gap: "normal",
    lineHeight: "20px",
    marginRight: "40px",
  })
);

const Pricing = styled.a<any>(
  css({
    color: "#ffffff",
    display: "flex",

    fontSize: "14px",
    gap: "normal",
    lineHeight: "20px",
  })
);

const Company = styled.div<any>(
  css({
    width: "1269px",
    height: "20px",
  })
);

const EmptyLeft = styled.div<any>(
  css({
    width: "433px",
    height: "20px",
    color: "white",

    float: "left",
  })
);

const CompanyProtected = styled.div<any>(
  css({
    width: "603px",
    height: "20px",

    float: "left",
    // color: "white",
  })
);

const CompanyName = styled.div<any>(
  css({
    width: "193px",
    height: "20px",

    float: "right",
    color: "white",
  })
);
