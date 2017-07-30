import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Direction } from './direction';
import { Scroll } from './scroll';
import { ScoreboardService } from '../score-board.service';
import { PlayingFieldService } from '../playing-field.service';
import { PlayingFieldManager } from './playing-field.manager';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent implements OnInit, OnDestroy {
  private scoreBoardService: ScoreboardService;
  private scroll: Scroll;
  private subscription: Subscription;
  private manager: PlayingFieldManager;

  gameOver: boolean;
  gameWon: boolean;
  tiles: number[][];

  constructor(scoreBoardService: ScoreboardService, playingFieldService: PlayingFieldService) {
    this.scoreBoardService = scoreBoardService;
    this.scroll = new Scroll();
    this.subscription = playingFieldService.playingFieldReset$.subscribe(() => { this.reset(); });
    this.manager = new PlayingFieldManager();
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('window:keyup.arrowup')
  arrowUp() {
    this.scroll.disable();
    this.moveUp();
    this.scroll.enable();
  }

  moveUp() {
    this.move(Direction.Up);
  }

  @HostListener('window:keyup.arrowdown')
  arrowDown() {
    this.scroll.disable();
    this.moveDown();
    this.scroll.enable();
  }

  moveDown() {
    this.move(Direction.Down);
  }

  @HostListener('window:keyup.arrowleft')
  arrowLeft() {
    this.scroll.disable();
    this.moveLeft();
    this.scroll.enable();
  }

  moveLeft() {
    this.move(Direction.Left);
  }

  @HostListener('window:keyup.arrowright')
  arrowRight() {
    this.scroll.disable();
    this.moveRight();
    this.scroll.enable();
  }

  moveRight() {
    this.move(Direction.Right);
  }

  private move(direction: Direction) {
    this.tiles = this.manager.move(this.tiles, direction);
    this.manager.gameOver(this.tiles);
    this.gameOver = this.manager.gameOver(this.tiles);
    this.gameWon = this.manager.gameWon(this.tiles);
  }

  private reset() {
    this.gameOver = false;
    this.gameWon = false;
    this.tiles = this.manager.resetPlayingField();
  }
}
