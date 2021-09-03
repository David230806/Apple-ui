
import iPhone12 from "../../imges/iPhone12-screen-one.jpg" 
import iPhone12Pro from "../../imges/iPhone12Pro-screen.jpg"
import apple from "../../imges/apple-copy.svg"
import List from "../../Components/List/List.jsx";
import './Main.css'

function Main() {
  return (
    <div className="Main">
        <main>
          <div className="iPhone12">
            <div className="text">
              <b>iPhone 12</b> <br />
              <span>Blast past fast</span> <br />
              <span className="sold">From $29.12/mo. for 24 mo. or $699 before trade-in <br /> Buy directly from Apple with special carrier offers</span> <br />
              <div className="links">
                <a href="#" >Learn more </a>
                <a href="#" >Buy </a>
              </div>
            </div>
            <div className="img">
              <img src={iPhone12} alt="" />
            </div>
          </div>
          <div className="iPhone12pro">
            <div className="text-pro">
              <div className="text-pro-top">
                <h2>iPhone 12 Pro</h2> <br />
                <span>It's a leap year</span> <br />
              </div>
              <span className="sold-pro">From $41.62/mo. for 24 mo. or $999 before trade-in <br /> Buy directly from Apple with special carrier offers</span> <br />
              <div className="links-pro">
                <a href="#" >Learn more </a>
                <a href="#" >Buy </a>
              </div>
            </div>
            <div className="img-pro">
              <img src={iPhone12Pro} alt="" />
            </div>
          </div>
          <div className="apple-tv-screen">
            <div className="tv-text">
              <div className="logo">
                <img src={apple} className="appleimg" alt="" />
                <b>tv+</b>
              </div>
              <div className="season">
                <h2>S E E</h2>
                <span className="season-span">new season</span> <br /> <br />
                <span>stream now</span>
              </div>
            </div>
          </div>
          <div className="store-screen">
            <List />
          </div>
          <div className="info-screen">
            <span className="info-one">
              1. Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon discount. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&T, T-Mobile, Sprint, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the Customer Agreement. Additional iPhone Payments terms are here. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product's purchase price, less all other payments at the monthly payment amount. <br />
            </span>
            <br />
            <span className="info-two">
              2. $9.99/month after free trial. No commitment. Plan automatically renews after trial until cancelled. <br />
            </span>
            <br />
            <span className="info-three">
              3. Qualified Purchasers receive Promotion Savings when they purchase an eligible Mac or eligible iPad with eligible AirPods at a Qualifying Location. Only one Promotion Product per eligible Mac or eligible iPad per Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers selecting Apple Card Monthly Installments (“ACMI”) as payment type at checkout shall receive a discount equal to the value of the eligible AirPods off the price of the eligible Mac or iPad. This will result in one ACMI installment plan over 12 months for the eligible iPad or Mac discounted by the instant credit, and a second ACMI installment plan over 6 months for the full price of the eligible AirPods. Qualified Purchasers will be charged for all items in their cart, including the eligible AirPods plus any additional Upgrade Cost. If you choose the pay-in-full or one-time-payment option for an ACMI eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI transactions and are subject to your standard purchase APR. ACMI is subject to credit approval and credit limit. Variable APRs for Apple Card other than ACMI range from 10.99% to 21.99% based on creditworthiness. Rates as of April 1, 2020. See the Apple Card Customer Agreement for more information. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Availability of in-store promotion offerings may be limited by Apple Store location closures as a result of COVID-19. Additional restrictions apply. View full terms and conditions of offer here. <br />
            </span>
            <br />
            <span className="info-four">
            To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings  General  Software Update. Tap Download and Install. <br /> <br />
            Available for qualifying applicants in the United States. <br /> <br />
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. <br /> <br />
            Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218. <br /> <br />
            Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply. <br />
            
            </span>
          </div>
        </main>
    </div>
  );
}

export default Main;