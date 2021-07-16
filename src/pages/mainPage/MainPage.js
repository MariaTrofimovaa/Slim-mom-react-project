import axios from "axios";
import React from "react";
import { useState } from "react";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal/Modal";
import DailyKkalIntake from "../../components/kkalInfo/DailyKkalIntake";
// import BurgerModal from "../../components/header/BurgerModal/BurgerModal";

const BASE_URL = "https://slimmom-backend.goit.global";

const transformString = (obj) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = Number(value);
  }
  return newObj;
};
const MainPage = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const onToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const onSubmit = async (values) => {
    const data = transformString(values);
    const res = await axios.post(`${BASE_URL}/daily-rate`, data);
    setData(res.data);
    console.log(res.data);
    setShowModal(true);
  };
  console.log(data);
  return (
    <>
      <DailyCaloriesForm onSubmit={onSubmit} />
      {showModal && (
        <Modal onClick={onToggleModal} onClose={onToggleModal}>
          <DailyKkalIntake {...data} />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
