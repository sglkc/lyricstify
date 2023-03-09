import { LineResponseInterface } from './line-response.interface.js';

export interface LyricResponseInterface {
  syncType: 'UNSYNCED' | 'LINE_SYNCED';
  lines: LineResponseInterface[];
  provider: string;
  providerLyricsId: string;
  providerDisplayName: string;
  language: string;
  syncLyricsUri: string;
  isDenseTypeface: boolean;
  alternatives: unknown[];
  isRtlLanguage: boolean;
  fullscreenAction: string;
}