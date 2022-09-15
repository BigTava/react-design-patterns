/* Layout Components */
import Modal from "./Modal";
import LargeProductListItem from "./product/LargeProductListItem";
import products from "./product/productsData";

/* Container Components */
import { UserInfo } from "./user/UserInfo";
import ProductInfo from "./product/ProductInfo";
import ResourceLoader from "./ResourceLoader";
import DataSource from "./DataSource";
import axios from "axios";

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

export function DataSourceComponent() {
  const getServerData = (url) => async () => {
    const response = await axios.get("/users/111");
    return response.data;
  };

  return (
    <>
      <DataSource getDataFunc={getServerData("/users/111")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default DataSourceComponent;

export function ResourceLoaderComponent() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/111" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1111" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export function ModalComponent() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}
