import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishVerbalComponent } from './english-verbal/english-verbal.component';
import { AdjectivesComponent } from './adjectives/adjectives.component';
import { AdverbsComponent } from './adverbs/adverbs.component';
import { ClozePassageComponent } from './cloze-passage/cloze-passage.component';
import { ConjunctionsComponent } from './conjunctions/conjunctions.component';
import { InferencesComponent } from './inferences/inferences.component';
import { InterjectionsComponent } from './interjections/interjections.component';
import { NounsComponent } from './nouns/nouns.component';
import { OneWordSubstitutionComponent } from './one-word-substitution/one-word-substitution.component';
import { PartsOfSpeechComponent } from './parts-of-speech/parts-of-speech.component';
import { PrefixesAndSuffixesComponent } from './prefixes-and-suffixes/prefixes-and-suffixes.component';
import { PrepositionsComponent } from './prepositions/prepositions.component';
import { PronounsComponent } from './pronouns/pronouns.component';
import { ReadingComprehensionComponent } from './reading-comprehension/reading-comprehension.component';
import { RootWordsComponent } from './root-words/root-words.component';
import { SentenceCompletionComponent } from './sentence-completion/sentence-completion.component';
import { SentenceCorrectionComponent } from './sentence-correction/sentence-correction.component';
import { SynonymsAndAntonymsComponent } from './synonyms-and-antonyms/synonyms-and-antonyms.component';
import { SyllableAndSyllableStressComponent } from './syllable-and-syllable-stress/syllable-and-syllable-stress.component';
import { VerbsComponent } from './verbs/verbs.component';
import { VocabularyBuildingComponent } from './vocabulary-building/vocabulary-building.component';

const routes: Routes = [
  { path: '', component: EnglishVerbalComponent },
  { path: 'adjectives', component: AdjectivesComponent },
  { path: 'adverbs', component: AdverbsComponent },
  { path: 'cloze-passage', component: ClozePassageComponent },
  { path: 'conjunctions', component: ConjunctionsComponent },
  { path: 'inferences', component: InferencesComponent },
  { path: 'interjections', component: InterjectionsComponent },
  { path: 'nouns', component: NounsComponent },
  { path: 'one-word-substitution', component: OneWordSubstitutionComponent },
  { path: 'parts-of-speech', component: PartsOfSpeechComponent },
  { path: 'prefixes-and-suffixes', component: PrefixesAndSuffixesComponent },
  { path: 'prepositions', component: PrepositionsComponent },
  { path: 'pronouns', component: PronounsComponent },
  { path: 'reading-comprehension', component: ReadingComprehensionComponent },
  { path: 'root-words', component: RootWordsComponent },
  { path: 'sentence-completion', component: SentenceCompletionComponent },
  { path: 'sentence-correction', component: SentenceCorrectionComponent },
  { path: 'synonyms-and-antonyms', component: SynonymsAndAntonymsComponent },
  { path: 'syllable-and-syllable-stress', component: SyllableAndSyllableStressComponent },
  { path: 'verbs', component: VerbsComponent },
  { path: 'vocabulary-building', component: VocabularyBuildingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishVerbalRoutingModule { }
