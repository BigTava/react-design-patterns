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

/* Controlled and Uncontrolled Components */
import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

/* Higher-Order Components */
import printProps from "./printProps";
import { withUser } from "./user/withUser";
import { UserInfoForm } from "./user/UserInfoForm";

/* Higher-Order Components */

export default function UserInfoFormComponent() {
  return <UserInfoForm />;
}

const UserInfoWithLoader = withUser(UserInfo, "111");

export function UserInfoWithLoaderComponent() {
  return <UserInfoWithLoader />;
}

const UserInfoWrapped = printProps(UserInfo);

export function UserInfoWrappedComponent() {
  return <UserInfoWrapped a={1} b={"hello"} c={{ name: "Tiago" }} />;
}

/* Controlled and Uncontrolled Components */
const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "Tiago Tavares" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

export function ControlledOnboardingFlowComponent() {
  const [onboardingData, setOnboardingData] = React.useState({});
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
}

export function UncontrolledOnboardingFlowComponent() {
  return (
    <UncontrolledOnboardingFlow onFinish={(data) => console.log(data)}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
}

export function ControlledModalComponent() {
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

export const UncontrolledFormComponent = () => {
  return <UncontrolledForm />;
};

export const ControlledFormComponent = () => {
  return <ControlledForm />;
};

/* Container Components */
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

/* Layout Components */
export function ModalComponent() {
  return (
    <>
      <UncontrolledModal>
        <LargeProductListItem product={products[0]} />
      </UncontrolledModal>
    </>
  );
}
