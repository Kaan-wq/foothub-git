import "../styles/Stats.css";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";

function StatsView({ stats, match }) {

    const images_url = "https://lsm-static-prod.livescore.com/medium/";
    const navigate = useNavigate();

    if (!stats.Stat) {
        return <div>The match hasn't started yet :)</div>;
    }

    const shof = 100/(stats.Stat[0].Shof + stats.Stat[1].Shof)
    const shon = 100/(stats.Stat[0].Shon + stats.Stat[1].Shon)
    const fls = 100/(stats.Stat[0].Fls + stats.Stat[1].Fls)
    const cos = 100/(stats.Stat[0].Cos + stats.Stat[1].Cos)
    const ths = 100/(stats.Stat[0].Ths + stats.Stat[1].Ths)
    const ycs = 100/(stats.Stat[0].Ycs + stats.Stat[1].Ycs)
    const gks = 100/(stats.Stat[0].Gks + stats.Stat[1].Gks)
    const ofs = 100/(stats.Stat[0].Ofs + stats.Stat[1].Ofs)

    return (
        <div className="stats-container">

            <div>
                <img src={images_url + match.T1[0].Img} />
                <span>{match.T1[0].Nm}</span>
                <span>{match.Tr1}</span>
                <span>-</span>
                <span>{match.Tr2}</span>
                <span>{match.T2[0].Nm}</span>
                <img src={images_url + match.T2[0].Img} />
            </div>

            <div>
                <button onClick={() => backToLive()}>
                    Live Matches
                </button>
            </div>

            <div className="stats-row">
                <span className="stat-name">Possession :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Pss}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Pss}%</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Pss}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Pss}%</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Shots off target :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Shof * shof}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Shof}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Shof * shof}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Shof}</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Shots on target :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Shon * shon}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Shon}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Shon * shon}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Shon}</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Fouls :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Fls * fls}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Fls}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Fls * fls}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Fls}</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Corner kicks :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Cos * cos}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Cos}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Cos * cos}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Cos}</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Throw ins :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Ths * ths}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Ths}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Ths * ths}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Ths}</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Yellow cards :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Ycs * ycs}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Ycs}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Ycs * ycs}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Ycs}</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Goalkeeper saves :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Gks * gks}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Gks}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Gks * gks}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Gks}</span>
                </div>
            </div>



            <div className="stats-row">
                <span className="stat-name">Offsides :</span>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-left"
              style={{ width: `${stats.Stat[0].Ofs * ofs}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[0].Ofs}</span>
                </div>
                <div className="gauge-bar-container">
          <span
              className="gauge-bar gauge-bar-right"
              style={{ width: `${stats.Stat[1].Ofs * ofs}%` }}
          ></span>
                    <span className="stat-value">{stats.Stat[1].Ofs}</span>
                </div>
            </div>



        </div>
    );

    function backToLive() {
        navigate("/matches");
    }
}

export default StatsView;
