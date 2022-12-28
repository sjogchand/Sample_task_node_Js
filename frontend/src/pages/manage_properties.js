import Footer from '../components/footer'
import SecondNavbar from '../components/second_navbar'
import ListingTable from '../components/listing_table'

export default function ManageProperties() {
  return (
    <div>
      <SecondNavbar />
      <ListingTable pb={'95px'} pt="85px" />
      <Footer />
    </div>
  )
}
