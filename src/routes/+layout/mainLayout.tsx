import NavigationBar from "../../components/NavigationBar/NavigationBar"
import Jobs from "../../routes/jobs/Jobs"

function MainLayout() {

  return (
    <>
    <NavigationBar />
    {/* TODO: add routes */}
    <div className="p-10">
      <Jobs />
     </div>
    </>
  )
}

export default MainLayout
