import Jobs from "../../routes/jobs/Jobs"
import NavigationBar from "../NavigationBar/NavigationBar"

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
