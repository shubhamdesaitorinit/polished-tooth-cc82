import Header from "../../components/Header";
import { ContextType } from "../../types";

const MainPage = async (context: ContextType) => {
  try {
    return (
      <div>
        <main class="w-full">
          <Header />
          <div class="w-full abosolute t-[56px] flex justify-center p-3 flex-col items-center">
            Main song Page
          </div>
        </main>
      </div>
    );
  } catch (error) {
    return <div>{error}Something went wrong</div>;
  }
};
export default MainPage;
