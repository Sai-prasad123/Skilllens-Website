import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemSolvingComponent } from './problem-solving/problem-solving.component';
import { AgesComponent } from './ages/ages.component';
import { AveragesComponent } from './averages/averages.component';
import { AlgebraComponent } from './algebra/algebra.component';
import { AreasAndVolumesComponent } from './areas-and-volumes/areas-and-volumes.component';
import { BoatsAndStreamComponent } from './boats-and-stream/boats-and-stream.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { GeometryComponent } from './geometry/geometry.component';
import { LogarithmComponent } from './logarithm/logarithm.component';
import { LcmAndHcfComponent } from './lcm-and-hcf/lcm-and-hcf.component';
import { MixturesComponent } from './mixtures/mixtures.component';
import { NumberSystemComponent } from './number-system/number-system.component';
import { PercentagesComponent } from './percentages/percentages.component';
import { ProfitAndLossComponent } from './profit-and-loss/profit-and-loss.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PermutationsAndCombinationsComponent } from './permutations-and-combinations/permutations-and-combinations.component';
import { ProbabilityComponent } from './probability/probability.component';
import { RacesComponent } from './races/races.component';
import { RatiosProportionsVariationsComponent } from './ratios-proportions-variations/ratios-proportions-variations.component';
import { SurdsAndIndicesComponent } from './surds-and-indices/surds-and-indices.component';
import { SetTheoryComponent } from './set-theory/set-theory.component';
import { SimpleEquationsComponent } from './simple-equations/simple-equations.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { TimeAndWorkComponent } from './time-and-work/time-and-work.component';
import { TimeSpeedDistanceComponent } from './time-speed-distance/time-speed-distance.component';
import { TrigonometryComponent } from './trigonometry/trigonometry.component';
import { AnalogyComponent } from './analogy/analogy.component';
import { ArithmeticReasoningComponent } from './arithmetic-reasoning/arithmetic-reasoning.component';
import { BloodRelationsComponent } from './blood-relations/blood-relations.component';
import { CodingAndDecodingComponent } from './coding-and-decoding/coding-and-decoding.component';
import { ClocksComponent } from './clocks/clocks.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CircularArrangementComponent } from './circular-arrangement/circular-arrangement.component';
import { DirectionSenseComponent } from './direction-sense/direction-sense.component';
import { DataSufficiencyComponent } from './data-sufficiency/data-sufficiency.component';
import { DicesComponent } from './dices/dices.component';
import { LetterSeriesComponent } from './letter-series/letter-series.component';
import { LinearArrangmentComponent } from './linear-arrangment/linear-arrangment.component';
import { NumberSeriesComponent } from './number-series/number-series.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { RankingComponent } from './ranking/ranking.component';
import { SyllogismComponent } from './syllogism/syllogism.component';
import { StatementAndConclusionsComponent } from './statement-and-conclusions/statement-and-conclusions.component';
import { VennDiagramComponent } from './venn-diagram/venn-diagram.component';

const routes: Routes = [
  { path: '', component: ProblemSolvingComponent },
  { path: 'ages', component: AgesComponent },
  { path: 'averages', component: AveragesComponent },
  { path: 'algebra', component: AlgebraComponent },
  { path: 'areas-and-volumes', component: AreasAndVolumesComponent },
  { path: 'boats-and-streams', component: BoatsAndStreamComponent },
  { path: 'compound-interest', component: CompoundInterestComponent },
  { path: 'discounts', component: DiscountsComponent },
  { path: 'geometry', component: GeometryComponent },
  { path: 'logarithm', component: LogarithmComponent },
  { path: 'lcm-and-hcf', component: LcmAndHcfComponent },
  { path: 'mixtures', component: MixturesComponent },
  { path: 'number-system', component: NumberSystemComponent },
  { path: 'percentages', component: PercentagesComponent },
  { path: 'profit-and-loss', component: ProfitAndLossComponent },
  { path: 'partnership', component: PartnershipComponent },
  { path: 'permutations-and-combinations', component: PermutationsAndCombinationsComponent },
  { path: 'probability', component: ProbabilityComponent },
  { path: 'races', component: RacesComponent },
  { path: 'ratios-proportions-variations', component: RatiosProportionsVariationsComponent },
  { path: 'surds-and-indices', component: SurdsAndIndicesComponent },
  { path: 'set-theory', component: SetTheoryComponent },
  { path: 'simple-equation', component: SimpleEquationsComponent },
  { path: 'simple-interest', component: SimpleInterestComponent },
  { path: 'time-and-work', component: TimeAndWorkComponent },
  { path: 'time-speed-distance', component: TimeSpeedDistanceComponent },
  { path: 'trigonometry', component: TrigonometryComponent },
  { path: 'analogy', component: AnalogyComponent },
  { path: 'arithmetic-reasoning', component: ArithmeticReasoningComponent },
  { path: 'blood-relation', component: BloodRelationsComponent },
  { path: 'coding-and-decoding', component: CodingAndDecodingComponent },
  { path: 'clocks', component: ClocksComponent },
  { path: 'calendars', component: CalendarsComponent },
  { path: 'circular-arrangement', component: CircularArrangementComponent },
  { path: 'direction-sense', component: DirectionSenseComponent },
  { path: 'data-sufficiency', component: DataSufficiencyComponent },
  { path: 'dices', component: DicesComponent },
  { path: 'letter-series', component: LetterSeriesComponent },
  { path: 'linear-arrangement', component: LinearArrangmentComponent },
  { path: 'number-series', component: NumberSeriesComponent },
  { path: 'puzzles', component: PuzzlesComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'syllogism', component: SyllogismComponent },
  { path: 'statement-and-conclusions', component: StatementAndConclusionsComponent },
  { path: 'venn-diagram', component: VennDiagramComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemSolvingRoutingModule { }
