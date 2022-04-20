import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import "./css/khampha.css";
import { Button } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Khampha() {
  const [mykhuyenkhich, setMyKhuyenKhich] = useState("Xu hướng");

  const handleChange = (event) => {
    setMyKhuyenKhich(event.target.value);
  };
  return (
    <div className="container1">
      <div>
        <h6>Khám phá</h6>
      </div>
      <div className="title-name">
        <h2>CÔNG THỨC NẤU ĂN</h2>
      </div>

      {/* main card */}

      <div className="main-card">
        <div class="card bg-dark text-white add-border">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay" style={{ marginTop: "250px" }}>
            <h1 class="card-title">
              <span className="them">SOUR CREAM & HÀNH TÂY</span>
            </h1>

            <p class="card-text">
              <span className="them">Bởi PSparix</span>
            </p>
            <p class="card-text">
              <span className="them">
                <i style={{ color: "orange" }}>
                  <FaRegClock></FaRegClock>
                  <b style={{ color: "#000", fontWeight: "bold" }}>1.3h</b>
                </i>
              </span>
            </p>
          </div>
        </div>

        <div class="card bg-dark text-white add-border">
          <img
            src="https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/03/9/oUfI6eDQGRUiM7Kn9AFH_DSC03351-2.jpg"
            class="card-img"
            alt="..."
          />
          <div class="card-img-overlay" style={{ marginTop: "250px" }}>
            <h1 class="card-title">
              <span className="them">BURRITO BỮA SÁNG CHORIZO-EGG</span>
            </h1>

            <p class="card-text">
              <span className="them">Bởi PSparix</span>
            </p>
            <p class="card-text">
              <span className="them">
                <i style={{ color: "orange" }}>
                  <FaRegClock></FaRegClock>
                  <b style={{ color: "#000", fontWeight: "bold" }}>1.3h</b>
                </i>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* sub card */}
      <div className="recommeded">
        {/* select */}
        <div>
          <h4 className="category-name-khuyen-khich">KHUYẾN KHÍCH</h4>
          <div>
            <form className="category-khuyen-khich">
              <select
                value={mykhuyenkhich}
                onChange={handleChange}
                className="info-danh-sach"
              >
                <option value="Loại 1">Xu hướng</option>
                <option value="Loại 2">Phổ biên</option>
                <option value="Loại 3">Nhanh chóng và dễ dàng</option>
                <option value="Loại 4">Mạnh khỏe</option>
                <option value="Loại 4">Lựa chọn của ban biên tập</option>
                <option value="Loại 4">Mới mẻ</option>
              </select>
            </form>
          </div>
        </div>

        {/* sub card */}
        <div className="sub-card">
          <Link to="/chi-tiet">
            <div class="card mb-3">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
                class="card-img-top"
                alt="Sour scream and onion"
              />
              <div class="card-body">
                <h5 class="card-title">KHOAI TÂY PETA</h5>
                <p class="card-text">Bởi DawNav</p>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <span>
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <AiOutlineStar style={{ color: "orange" }} />
                      ))}
                    (10)
                  </span>
                  <span style={{ float: "right" }}>
                    <i style={{ color: "#ff6600" }}>
                      <FaRegClock></FaRegClock>
                    </i>
                    <b>5m</b>
                  </span>
                </p>
              </div>
              <div>
                <p class="card-text">
                  <Button className="share-button">Share</Button>
                </p>
              </div>
            </div>
          </Link>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (50)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (60)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (13)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>
        </div>

        <div className="sub-card">
          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (13)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (15)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (2)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (5)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>
        </div>

        <div className="sub-card">
          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (16)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (21)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (23)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>

          <div class="card mb-3">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soured-cream-b53ce89.jpg?quality=90&webp=true&resize=440,400"
              class="card-img-top"
              alt="Sour scream and onion"
            />
            <div class="card-body">
              <h5 class="card-title">KHOAI TÂY PETA</h5>
              <p class="card-text">Bởi DawNav</p>
            </div>
            <div class="card-body">
              <p class="card-text">
                <span>
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                  (11)
                </span>
                <span style={{ float: "right" }}>
                  <i style={{ color: "#ff6600" }}>
                    <FaRegClock></FaRegClock>
                  </i>
                  <b>5m</b>
                </span>
              </p>
            </div>
            <div>
              <p class="card-text">
                <Button className="share-button">Share</Button>
              </p>
            </div>
          </div>
        </div>

        {/* add loading */}
        <div className="btn-add-loading">
          <Button className="btn-tai-them">Tải thêm</Button>
        </div>
      </div>
    </div>
  );
}
