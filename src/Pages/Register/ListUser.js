import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TopBar from "../../Components/topbar/TopBar"
import { Container } from "react-bootstrap";
import { getUser } from "../../JS/Actions/user";
const ListUser = () => {
    const { _id } = useParams();
  const dispatch = useDispatch();
  const UserOne = useSelector((state) => state.userReducer.userToGet);
  const Load = useSelector((state) => state.userReducer.load);
  useEffect(() => {
    dispatch(getUser(_id));
  }, [dispatch]);

  return (
    <div>
      <TopBar/>
       <Container>
      <ol class="list-group list-group-light list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">الاسم</div>
            {`${UserOne.name}`} 

          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">تاريخ الولادة</div>
            {`${UserOne.date_birth}`}
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">العنوان</div>
                {`${UserOne.adress}`}        </div>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">الشهادة العلمية</div>
            {`${UserOne.diplom}`}  
          </div>
        </li>

      
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">تاريخ الدخول </div>
            {`${UserOne.date_of_entry}`} 
          </div>{" "}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold"> تاريخ الخروج</div>
            {`${UserOne.releaseDate}`} 
             
          </div>{" "}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold"> البريد الالكتروني </div>
            {`${UserOne.email}`}   
          </div>{" "}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">كلمة العبور</div>
            {`${UserOne.password}`} 
          </div>{" "}
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">الموقع </div>
            {`${UserOne.position}`} 
          </div>{" "}
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold"> الهاتف</div>
            {`${UserOne.phone}`} 
          </div>{" "}
        </li>

      </ol>
      </Container>
    </div>
  )
}

export default ListUser