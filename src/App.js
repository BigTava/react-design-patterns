import React from "react";

/* Layout Components */
import UncontrolledModal from "./UncontrolledModal";
import LargeProductListItem from "./product/LargeProductListItem";
import products from "./product/productsData";

/* Container Components */
import { UserInfo } from "./user/UserInfo";
import ProductInfo from "./product/ProductInfo";
import ResourceLoader from "./ResourceLoader";
import DataSource from "./DataSource";
import axios from "axios";

/* Controlled and Uncontralled Components */
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";

function ControlledModalComponent() {
  const [shouldShowModal, setShouldShowModal] = React.useState(false);

  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default ControlledModalComponent;

export const UncontrolledFormComponent = () => {
  return <UncontrolledForm />;
};

export const ControlledFormComponent = () => {
  return <ControlledForm />;
};

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
      <UncontrolledModal>
        <LargeProductListItem product={products[0]} />
      </UncontrolledModal>
    </>
  );
}
