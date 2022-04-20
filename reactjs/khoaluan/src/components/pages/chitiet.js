import React from "react";
import "./css/chitiet.css";
import { AiOutlineStar, AiFillSave, AiOutlinePrinter } from "react-icons/ai";
import { Button, Tabs, Tab, Carousel } from "react-bootstrap";

const chitiet = () => {
  return (
    <div className="container2">
      <div>
        <h1>THỊT HEO NƯỚNG SỐT HÀNH TÂY SỐT KEM CHUA</h1>
      </div>

      {/* title */}
      <div className="row">
        <div class="col-2">
          <img
            src="https://vietwebgroup.vn/admin/uploads/am-thuc-la-gi-tim-hieu-ve-am-thuc-la-gi.jpg"
            alt="logo"
            style={{ width: "150px", height: "100px" }}
          />
        </div>
        <div class="col-2">
          <p>Công thức của PSarX</p>
          <span>
            {Array(5)
              .fill()
              .map((_, index) => (
                <AiOutlineStar style={{ color: "orange" }} />
              ))}
            (10)
          </span>
        </div>
      </div>

      {/* slide image */}

      <div className="slide-image">
        <Carousel style={{ width: "65%" }}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://toinayangi.vn/wp-content/uploads/2015/11/cream-chicken.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://cdn.tgdd.vn/2021/10/CookRecipe/Avatar/sot-chao-do-thumbnail.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://media.suckhoecong.vn/thumb_x800x450/Images/Uploaded/Share/2017/02/13/thit-heo-xao-hanh-tay-sot-chua-ngot11486972318.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* button */}
      <div className="btn-save-recipe">
        <Button className="btn-luu">
          <i>
            <AiFillSave
              style={{
                fontSize: "24px",
                textAlign: "center",
                marginRight: "8px",
              }}
            ></AiFillSave>
          </i>
          LƯU CÔNG THỨC
        </Button>
      </div>

      {/* btn print */}
      <div style={{ color: "#ff0000" }}>
        <i style={{ fontSize: "32px", marginRight: "8px" }}>
          <AiOutlinePrinter></AiOutlinePrinter>
        </i>
        <Button
          style={{
            backgroundColor: "#fff",
            border: "none",
            color: "#ff0000",
            fontWeight: "bold",
          }}
        >
          NHẬN IN
        </Button>
      </div>

      <div className="row">
        <div className="col-4">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">THÀNH PHẦN</th>
                <th scope="col">Dinh dưỡng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h5>Hướng dẫn</h5>
          <p style={{ width: "100%" }}>
            Làm nóng lò trươc ở 360 độ. asdasdasd. asdasd. asdasdasd. asdasdasd.
            ádasdas. asdasdassssssssssssssssssssssss.
            asdddddddddddddddddddddddddddddddddddddddddd. áddddddddddddddddđ
          </p>
        </div>
      </div>

      {/* review comment */}
      <div className="row">
        <div className="col-7">
          <h1>Comments</h1>
          <div className="comment mt-4 text-justify float-left">
            <img
              src="https://i.imgur.com/yTFUilP.jpg"
              alt=""
              className="rounded-circle"
              width="40"
              height="40"
            />
            <h4 className="name-user-comment">Jhon Doe</h4>
            <span>- 20 October, 2018</span> <br />
            <p>
              <span>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <AiOutlineStar style={{ color: "orange" }} />
                  ))}
                (10)
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus numquam assumenda hic aliquam vero sequi velit molestias
              doloremque molestiae dicta?
            </p>
          </div>

          <div className="text-justify darker mt-4 float-right">
            <img
              src="https://i.imgur.com/CFpa3nK.jpg"
              alt=""
              className="rounded-circle"
              width="40"
              height="40"
            />
            <h4 className="name-user-comment">Rob Simpson</h4>
            <span>- 20 October, 2018</span> <br />
            <p>
              <span>
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <AiOutlineStar style={{ color: "orange" }} />
                  ))}
                (10)
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus numquam assumenda hic aliquam vero sequi velit molestias
              doloremque molestiae dicta?
            </p>
          </div>
        </div>

        <div className="col-4">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Upload">
              <p>hello1</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <p>hello1</p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <p>hello1</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default chitiet;
