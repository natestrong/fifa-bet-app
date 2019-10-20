import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  division_slider_max: number = 10
  division_slider_min: number = 1
  division_slider_thumbLabel: boolean = true
  division_level: number = 6

  division_base_bets: any = {
    10: 1.00,
    9: 1.50,
    8: 2.50,
    7: 5.00,
    6: 10.00,
    5: 20.00,
    4: 40.00,
    3: 100.00,
    2: 200.00,
    1: 250.00
  }
  goal_cost_multiplier: number = .25
  tie_cost_multiplier: number = .25

  cash: number = 0
  games_played: number = 0
  games_won: number = 0
  games_lost: number = 0
  games_drawn: number = 0
  goals_for: number = 0
  goals_against: number = 0

  show_stats: boolean = true

  current_earnings_calculation:number = 0

  calculateEarnings(player_goals: number, opponent_goals: number): number {
    let earnings: number = 0
    let division_base_bet = this.division_base_bets[this.division_level]
    let division_goal_cost = division_base_bet * this.goal_cost_multiplier

    if (player_goals == opponent_goals) {
      // TIE
      earnings = -division_base_bet * this.tie_cost_multiplier
      // WIN
    } else if (player_goals > opponent_goals) {
      earnings += division_base_bet
      earnings += (player_goals - opponent_goals) * division_goal_cost
      // LOSE
    } else if (player_goals < opponent_goals) {
      earnings -= division_base_bet
      earnings -= (opponent_goals - player_goals) * division_goal_cost
    }
    this.current_earnings_calculation = earnings
    return earnings
  }

  onGameResultsSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form)
      let player_goals = form.value.player_goals
      let opponent_goals = form.value.opponent_goals

      this.cash += this.calculateEarnings(player_goals, opponent_goals)
      this.games_played++
      this.goals_for += player_goals

      if (player_goals > opponent_goals) {
        this.games_won++
      } else if (player_goals < opponent_goals) {
        this.games_lost++
      } else if (player_goals == opponent_goals) {
        this.games_drawn++
      }
    }
    form.resetForm()
  }
  //
  // onIncrementForm(form) {
  //   form.value.player_goals ++
  // }
}
