import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate, useParams } from "react-router-dom";

import { BsFillTrashFill } from "react-icons/bs";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { edituser, getUser } from "../../JS/Actions/user";
import TopBar from "../../Components/topbar/TopBar";
import { Button } from "react-bootstrap";

const EditUser = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const match = useMatch("/edituser/:id");
  const UserOne = useSelector((state) => state.userReducer.userToGet);
  const Load = useSelector((state) => state.userReducer.load);
  useEffect(() => {
    dispatch(getUser(_id));
  }, [dispatch]);

  const handelChange = (e) => {
    setNewUser({...newUser, [e.target.name]:e.target.value });
  };

  useEffect(() => {
    dispatch(getUser(_id));
  });
  const handelEdit = () => {
    dispatch(edituser(_id,newUser,navigate));
    
  };
  return (
    <div>
      <TopBar />

      <form className="m-5">
        <MDBRow className="mb-2">
          <MDBCol>
            <MDBInput
              id="form6Example1"
              label="اسم المستخدم"
              placeholder={`${UserOne.name}`}
              onChange={handelChange}
              name="name"
            />
            <MDBInput
              id="form6Example1"
              label="تاريخ الولادة"
              placeholder={`${UserOne.date_birth}`}
              onChange={handelChange}
              name="date_birth"
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              textarea
              id="form6Example2"
              rows={5}
              label="العنوان"
              placeholder={`${UserOne.adress}`}
              onChange={handelChange}
              name="adress"
            />
          </MDBCol>
        </MDBRow>

        <MDBInput
          wrapperClass="mb-2"
          id="form6Example3"
          label="تاريخ الدخول"
          placeholder={`${UserOne.date_of_entry}`}
          onChange={handelChange}
          name="date_of_entry"
        />
        <MDBInput
          wrapperClass="mb-2"
          type="text"
          id="form6Example6"
          label='تاريخ الخروج'
          placeholder={`${UserOne.releaseDate}`}
          onChange={handelChange}
          name="releaseDate"
        />
        <MDBInput
          wrapperClass="mb-2"
          id="form6Example4"
          label="الشهادة العلمية"
          placeholder={`${UserOne.diplom}`}
          name="diplom"
        />
        <MDBInput
          wrapperClass="mb-2"
          id="form6Example5"
          label="البريد الالكتروني"
          placeholder={`${UserOne.email}`}
          onChange={handelChange}
          name="email"
        />

        <MDBInput
          wrapperClass="mb-2"
          label='كلمة العبور'
          placeholder={`${UserOne.password}`}
          onChange={handelChange}
          name="password"
        />

        <MDBInput
          wrapperClass="mb-2"
          type="text"
          id="form6Example6"
          label=" الموقع"
          placeholder={`${UserOne.position}`}
          onChange={handelChange}
          name="position"
        />
        <MDBInput
          wrapperClass="mb-2"
          type="number"
          id="form6Example6"
          label="  الهاتف"
          placeholder={`${UserOne.phone}`}
          onChange={handelChange}
          name="phone"
        />

        <Button className="mb-4"  onClick={handelEdit}>
          تحيين
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
