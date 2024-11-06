import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishVerbalRoutingModule } from './english-verbal-routing.module';
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
import { SyllableAndSyllableStressComponent } from './syllable-and-syllable-stress/syllable-and-syllable-stress.component';
import { SynonymsAndAntonymsComponent } from './synonyms-and-antonyms/synonyms-and-antonyms.component';
import { VerbsComponent } from './verbs/verbs.component';
import { VocabularyBuildingComponent } from './vocabulary-building/vocabulary-building.component';


@NgModule({
  declarations: [
    EnglishVerbalComponent,
    AdjectivesComponent,
    AdverbsComponent,
    ClozePassageComponent,
    ConjunctionsComponent,
    InferencesComponent,
    InterjectionsComponent,
    NounsComponent,
    OneWordSubstitutionComponent,
    PartsOfSpeechComponent,
    PrefixesAndSuffixesComponent,
    PrepositionsComponent,
    PronounsComponent,
    ReadingComprehensionComponent,
    RootWordsComponent,
    SentenceCompletionComponent,
    SentenceCorrectionComponent,
    SyllableAndSyllableStressComponent,
    SynonymsAndAntonymsComponent,
    VerbsComponent,
    VocabularyBuildingComponent
  ],
  imports: [
    CommonModule,
    EnglishVerbalRoutingModule
  ]
})
export class EnglishVerbalModule { }
