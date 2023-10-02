import { Card, Grid, Typography } from "@mui/material";
import AnalyticalCard from "../../components/card/AnalyticalCard";
import {
  analyticCardMock,
  circularSliderMock,
  lineSliderMock,
} from "../../mock";
import { CircularSlider, LineSlider } from "../../components/slider";
import ReactTable from "../../components/table";
import styles from "../../styles/components/dashboard.module.scss";
import { TitleWithIcon } from "../trophyRequest";
import { footballIcon, menuIcon } from "../../assets/icons/indext";
import { dataTrophyReq } from "../../mock/tablesMock";
import { LineSliderHeader } from "../../components/header/inext";
import Map from "../../components/map/Map";
import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../database/firebaseConfig";
import Loader from "react-js-loader";

const columnsDashboard = [
  {
    Header: "Name",
    accessor: "name",
    Cell: (props: any) => {
      return <TitleWithIcon title={props.value} />;
    },
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Type",
    accessor: "selectSport",
    Cell: (props: any) => {
      return <TitleWithIcon title={props.value} icon={footballIcon} />;
    },
  },

  {
    Header: () => {
      return null;
    },
    id: "menu",
    Cell: () => <img src={menuIcon} alt="del-icon" className="pointer" />,
  },
];
const Dashboard = () => {
  const [users, setUsers] = useState<any>([]);
  const [posts, setPosts] = useState<any>([]);
  const [visitors, setVisitors] = useState<any>([]);
  const [topStates, setTopStates] = useState<any>(analyticCardMock);
  const [ageData, setAgeData] = useState<any>(circularSliderMock);
  const [loader, setLoader] = useState(false);
  async function getUsers(db: any) {
    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    console.log("users", usersList);
    setUsers(usersList);
  }
  async function getPosts(db: any) {
    const postsCol = collection(db, "Posts");
    const postsSnapshot = await getDocs(postsCol);
    const postsList = postsSnapshot.docs.map((doc) => doc.data());
    console.log("posts", postsList);
    setPosts(postsList);
  }

  useEffect(() => {
    setLoader(true);
    getPosts(db);
    getUsers(db);
  }, []);

  useEffect(() => {
    if (users.length) {
      let under18 = users.filter((u: any) => u.age < 18).length;
      let under30 = users.filter((u: any) => u.age < 30 && u.age > 18).length;
      let under50 = users.filter((u: any) => u.age < 50 && u.age > 30).length;
      let under60 = users.filter((u: any) => u.age < 60 && u.age > 50).length;
      let totalUser = users.length;
      ageData[0] = {
        ...ageData[0],
        percentage: Math.round((under18 / totalUser) * 100),
      };
      ageData[1] = {
        ...ageData[1],
        percentage: Math.round((under30 / totalUser) * 100),
      };
      ageData[2] = {
        ...ageData[2],
        percentage: Math.round((under50 / totalUser) * 100),
      };
      ageData[3] = {
        ...ageData[3],
        percentage: Math.round((under60 / totalUser) * 100),
      };
      // console.log(ageData)

      const groupedByCountry = users.reduce((acc: any, u: any) => {
        const country = u.country;
        (acc[country] = acc[country] || []).push(u);
        return acc;
      }, {});

      const resultArray = Object.values(groupedByCountry);
      resultArray.map((r: any, index: any) => {
        visitors[index] = {
          ...lineSliderMock[index],
          total: r.length,
          name: r[0].country,
          percentage: Math.round((r.length / users.length) * 100),
        };
        // console.log("=>",index,r);
        // if (index === 1) continue;
      });
      console.log("visitors",visitors);
    //   setVisitors(resultArray)
      setLoader(false);
    }
  }, [users]);
  useEffect(() => {
    topStates[0] = { ...topStates[0], title: users.length };
    topStates[1] = { ...topStates[1], title: posts.length };
    topStates[2] = { ...topStates[2], title: users.length };
  }, [posts, users]);

  return (
    <>
      <Grid container spacing={2}>
        {loader ? (
          <div style={{ position: "absolute", top: "10%", left: "50%" }}>
            <Loader
              type="spinner-circle"
              bgColor={"#1928"}
              // title={"spinner-circle"}
              // color={"#9182"}
              size={100}
            />
          </div>
        ) : (
          <></>
        )}
        {topStates.map(({ title, subTitle, icon }: any, index: any) => {
          return (
            <AnalyticalCard
              title={title}
              subTitle={subTitle}
              icon={icon}
              key={index}
            />
          );
        })}
      </Grid>

      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <Typography>Map View</Typography>
            <Map />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <LineSliderHeader title="Users Breakdown" />
            {visitors
              .slice(0, 3)
              .map(({ total, name, percentage, color }:any) => (
                <LineSlider
                  total={total}
                  name={name}
                  percentage={percentage}
                  key={total}
                  color={color}
                />
              ))}
          </Card>
        </Grid>
      </Grid>

      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12} md={8}>
          <ReactTable
            data={users.slice(0, 3)}
            columns={columnsDashboard}
            title="Total Visitors"
            name="visitors"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <div className={styles.dashboardFlex}>
              {ageData.map(({ title, percentage, color }: any) => (
                <CircularSlider
                  percentage={percentage}
                  title={title}
                  key={title}
                  color={color}
                />
              ))}
            </div>

            {visitors
              .slice(0, 2)
              .map(({ total, name, percentage, color }:any) => (
                <LineSlider
                  total={total}
                  name={name}
                  percentage={percentage}
                  key={total}
                  color={color}
                />
              ))}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
