import MasterLayout from "@layouts/masterLayout";
import { BiArrowBack } from "react-icons/all";
import { Button, Space } from "antd";
import CourseItem from "../components/courses/courseItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { n5, tiengnhat } from "@mockdata/menu-lo-trinh";
import { Link } from "react-router-dom";
import { carouselResponsive } from "@mockdata/CarousalResponsive";

const home = () => (
  <MasterLayout>
    {tiengnhat.map((val) => (
      <div className="space-y-2 mt-2">
        <Space className="  ">
          <BiArrowBack className="text-[28px]" />
          <h2 className="text-[28px] ">{val}</h2>

          <Link to={"/lo-trinh"}>
            <Button>
              <Space>
                Lộ trình
                <img src="src/assets/images/icons/lo-trinh.png" alt="" />
              </Space>
            </Button>
          </Link>
        </Space>
        <section className="">
          <Carousel responsive={carouselResponsive}>
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </Carousel>
        </section>
      </div>
    ))}
  </MasterLayout>
);
export default home;
