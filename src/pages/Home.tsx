import { Editor, Element, Frame } from "@craftjs/core";
import DefaultLayout from "../components/layout/Layout";
import { Container } from "../components/Container/Container";
import { Heading } from "../components/UserComponents/Heading";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Column } from "../components/UserComponents/Columns/Columns";
import { ColumnLayout } from "../components/UserComponents/Columns/ColumnsLayout";
import { Button } from "../components/UserComponents/Buttons/Button";
import { Text } from "../components/UserComponents/Text/Text";
import { Wrapper } from "../components/UserComponents/Wrapper/Wrapper";
import { ContainerMini } from "../components/UserComponents/ContainerMini/ContainerMini";

const Home = () => {
  return (
    <Editor resolver={{ Container, Heading, Column,ColumnLayout, Button, Text, Wrapper, ContainerMini }}>
      {/* <DefaultLayout>
                <Frame>
                <Element is={Container} padding={5} background="#eee" canvas>
                   <button>Hello World</button>
                   <button>New World</button>
                </Element>
                </Frame>
            </DefaultLayout> */}
      <div className="min-h-screen">
        <div className="navbar">
          <Navbar />
          <Header />
        </div>
        <div className="flex h-full">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="relative flex flex-1 min-h-[100vh] flex-col ml-16 mt-24 overflow-y-auto">
            <main>
              <div className="mx-auto max-w-screen-2xl px-2 py-4">
                <Frame>
                  <Element is={Container} padding={5} background="#fff" canvas>
                    <button>Hello World</button>
                    <button>New World</button>
                  </Element>
                </Frame>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Editor>
  );
};

export default Home;
