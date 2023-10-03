"use client"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
 
import "./styles/home.css"
import { game } from './utils'
export default function Home() {
 
  useEffect(()=>{
    game()
  },[])
  return (
    <div>
         <div id="bg-anim">
            <ul class="Xs">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul class="Ys">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div id="main">
            <div id="title">
                <h1>Tic-Tac-Toe</h1>
                <div id="singlePlayer" onclick="enableComputer()">Single</div>
                <div id="twoPlayer" onclick="buttonPress()">2-Player</div>
                <div id="reset" onclick="reset()">Reset</div>
            </div>
        </div>

        <div id="board">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
            <div class="line4"></div>
            <div class="box" id="box1" onclick="inputOne()"></div>
            <div class="box" id="box2" onclick="inputTwo()"></div>
            <div class="box" id="box3" onclick="inputThree()"></div>
            <div class="box" id="box4" onclick="inputFour()"></div>
            <div class="box" id="box5" onclick="inputFive()"></div>
            <div class="box" id="box6" onclick="inputSix()"></div>
            <div class="box" id="box7" onclick="inputSeven()"></div>
            <div class="box" id="box8" onclick="inputEight()"></div>
            <div class="box" id="box9" onclick="inputNine()"></div>
        </div>
        <div id="difficulty">
            <div class="diffTitle">Difficulty</div>
            <div class="mindless" onclick="mindlessDiff()">Easy</div>
            <div class="easy" onclick="easyDiff()">Medium</div>
            <div class="hard" onclick="hardDiff()">Hard</div>
        </div>
        <div id="scoreboard">
            <div class="blue"><div id="blueScore">0</div></div>
            <div class="red"><div id="redScore">0</div></div>
        </div>
    </div>
  )
}