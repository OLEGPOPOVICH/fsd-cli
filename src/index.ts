#!/usr/bin/env node
import path from 'path';
import 'module-alias/register';
import { Command } from 'commander';

import { LAYER_NAMES } from '@shared/constants/layers';
import { createFolder } from '@shared/lib/folder';

import { generateFiles } from './generateFiles';

const program = new Command();

program
  .name('fsd-cli')
  .description('CLI для создания структуры FSD')
  .version('1.0.0');

program
  .command('create-layers')
  .description('Создать слои')
  .action(() => {
    createFolder('.', 'src');

    Object.values(LAYER_NAMES).forEach((layerName) => {
      createFolder('src', layerName);
    });

    process.exit();
  });

program
  .command('create-process <sliceName> <sliceTitle>')
  .description('Создать процесс')
  .action(async (sliceName, sliceTitle) => {
    const layerName = LAYER_NAMES.PROCESSES;
    const templatesPath = path.join(__dirname, 'templates');

    createFolder('src', layerName);

    await generateFiles({
      layerName,
      sliceTitle,
      sliceName,
      templatesPath,
    });

    process.exit();
  });

program
  .command('create-page <sliceName> <sliceTitle>')
  .description('Создать страницу')
  .action(async (sliceName, sliceTitle) => {
    const layerName = LAYER_NAMES.PAGES;
    const templatesPath = path.join(__dirname, 'templates');

    createFolder('src', layerName);

    await generateFiles({
      layerName,
      sliceTitle,
      sliceName,
      templatesPath,
    });

    process.exit();
  });

program
  .command('create-widget <sliceName> <sliceTitle>')
  .description('Создать виджет')
  .action(async (sliceName, sliceTitle) => {
    const layerName = LAYER_NAMES.WIDGETS;
    const templatesPath = path.join(__dirname, 'templates');

    createFolder('src', layerName);

    await generateFiles({
      layerName,
      sliceTitle,
      sliceName,
      templatesPath,
    });

    process.exit();
  });

program
  .command('create-feature <sliceName> <sliceTitle>')
  .description('Создать фичу')
  .action(async (sliceName, sliceTitle) => {
    const layerName = LAYER_NAMES.FEATURES;
    const templatesPath = path.join(__dirname, 'templates');

    createFolder('src', layerName);

    await generateFiles({
      layerName,
      sliceTitle,
      sliceName,
      templatesPath,
    });

    process.exit();
  });

program
  .command('create-entity <sliceName> <sliceTitle>')
  .description('Создать сущность')
  .action(async (sliceName, sliceTitle) => {
    const layerName = LAYER_NAMES.ENTITIES;
    const templatesPath = path.join(__dirname, 'templates');

    createFolder('src', layerName);

    await generateFiles({
      layerName,
      sliceTitle,
      sliceName,
      templatesPath,
    });

    process.exit();
  });

program
  .command('help')
  .description('Показать справку')
  .action(() => {
    program.outputHelp();
  });

program.parse(process.argv);
