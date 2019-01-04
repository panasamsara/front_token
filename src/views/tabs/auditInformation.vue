<template>
    <div>
        <apply :model="model"
               :dicts="dicts"
               :step="step"></apply>
        <br>
        <files :model="model"></files>
    </div>
</template>

<script src="../../components/tabs/auditInformation.js"></script>